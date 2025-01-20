import { ActionFunctionArgs } from "@remix-run/node";
import { getStoreAccessInfo } from "app/utils/get_store_access_info";

const CREATE_NEW_DISCOUNT_CODE_MUTATION = `
  mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            codes(first: 1) {
              nodes {
                code
              }
            }
            startsAt
            endsAt
            status
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const GET_EXISTING_DISCOUNT_CODES_QUERY = `
  query codeDiscountNodeByCode($code: String!) {
    codeDiscountNodeByCode(code: $code) {
      codeDiscount {
        __typename
        ... on DiscountCodeBasic {
          codesCount {
            count
          }
          shortSummary
        }
      }
      id
    }
  }
`;

export async function action({ request }: ActionFunctionArgs) {
  console.log("Receive an API call, // shopify.post.create_discount_code_redeem");

  const { shop, accessToken, input } = await getStoreAccessInfo(request);

  try {
    let discountValue: any;

    if (input.discount_type === "fixed_amount") {
      discountValue = {
        discountAmount: {
          amount: input.discount_amount!.toString(),
          appliesOnEachItem: false,
        },
      };
    } else {
      discountValue = {
        percentage: parseFloat((input.discount_percentage! / 100).toFixed(4)),
      };
    }

    const appliesOncePerCustomer = input.use_limit_type === "single_use";
    const usageLimit = input.use_limit_type === "single_use" ? 1 : null;

    const basicCodeDiscount: { [key: string]: any } = {
      title: input.discount_code_name,
      code: "",
      startsAt: input.valid_from,
      endsAt: input.valid_until || null,
      customerSelection: {
        all: true,
      },
      customerGets: {
        items: {
          all: true,
        },
        value: discountValue,
      },
      appliesOncePerCustomer,
      usageLimit,
    };

    if (input.minimum_spending && input.minimum_spending > 0) {
      basicCodeDiscount.minimumRequirement = {
        subtotal: {
          greaterThanOrEqualToSubtotal: input.minimum_spending.toString(),
        },
      };
    }

    let redeem_code = "";
    let codeExists = true;

    while (codeExists) {
      redeem_code = generateRandomCode(12);

      const checkResult = await fetch(
        `https://${shop}/admin/api/2024-10/graphql.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": accessToken,
          },
          body: JSON.stringify({
            query: GET_EXISTING_DISCOUNT_CODES_QUERY,
            variables: { code: redeem_code },
          }),
        }
      );

      const checkData = await checkResult.json();
      const existingCodes =
        checkData.data.codeDiscountNodeByCode?.id || null;

      codeExists = existingCodes !== null;
    }

    console.log("Redeem code does not exist:", redeem_code);

    basicCodeDiscount.code = redeem_code;

    const result = await fetch(
      `https://${shop}/admin/api/2024-10/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": accessToken,
        },
        body: JSON.stringify({
          query: CREATE_NEW_DISCOUNT_CODE_MUTATION,
          variables: { basicCodeDiscount },
        }),
      }
    );

    const response = await result.json();

    if (
      response.data?.discountCodeBasicCreate?.userErrors &&
      response.data.discountCodeBasicCreate.userErrors.length > 0
    ) {
      const errors = response.data.discountCodeBasicCreate.userErrors
        .map((e: { message: string }) => e.message)
        .join(", ");
      throw new Error(`Shopify error: ${errors}`);
    }

    const createdDiscount =
      response.data.discountCodeBasicCreate.codeDiscountNode;

    return {
      webstore_redeem_code_id: createdDiscount.id,
      redeem_code,
      shop_id: shop,
      message: "Successfully created redeem code in Shopify.",
    };
  } catch (error: any) {
    console.error("Error creating Shopify discount:", error.message);
    throw new Error(error.message);
  }
}

function generateRandomCode(length: number): string {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}