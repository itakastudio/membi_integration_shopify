// app/routes/shopify.post.create_new_discount_code.tsx

import { ActionFunctionArgs } from "@remix-run/node";
import { getStoreAccessInfo } from "app/utils/get_store_access_info";

interface storeAccess {
  shop: string;
  accessToken: string;
  input?: DiscountInput;
}

interface DiscountInput {
  discount_code_name: string;
  discount_code: string;
  discount_type: "fixed_amount" | "percentage";
  minimum_spending: number;
  use_limit_type: "single_use" | "once_per_customer" | "unlimited";
  valid_from: string;
  valid_until: string;
  discount_amount?: number;
  discount_percentage?: number;
}

export async function action({ request }: ActionFunctionArgs) {
  console.log(
    "receive an api call, // app/routes/shopify.post.create_new_discount_code.tsx",
  );

  const storeAccess: storeAccess = await getStoreAccessInfo(request);
  const { shop, accessToken, input } = storeAccess;
  console.log("shop", shop);
  console.log("storeAccessToken in prisma", accessToken);
  console.log("input", input);


  // const formData = await request.formData();
  // const input: DiscountInput = {
  //   discount_code_name: formData.get("discount_code_name") as string,
  //   discount_code: formData.get("discount_code") as string,
  //   discount_type: formData.get("discount_type") as
  //     | "fixed_amount"
  //     | "percentage",
  //   minimum_spending: Number(formData.get("minimum_spending")),
  //   use_limit_type: formData.get("use_limit_type") as
  //     | "single_use"
  //     | "once_per_customer"
  //     | "unlimited",
  //   valid_from: formData.get("valid_from") as string,
  //   valid_until: formData.get("valid_until") as string,
  //   discount_amount: formData.get("discount_amount")
  //     ? Number(formData.get("discount_amount"))
  //     : undefined,
  //   discount_percentage: formData.get("discount_percentage")
  //     ? Number(formData.get("discount_percentage"))
  //     : undefined,
  // };

  try {
    const createdDiscount = await createShopifyDiscountCode(
      input!,
      shop,
      accessToken,
    );

    console.log("Discount code created successfully:", createdDiscount);

    const responseData = {
      createdDiscount,
      message: "成功於 Shopify 商店建立優惠碼",
    };
    return responseData;
  } catch (error: any) {
    console.error("Error creating discount code:", error);
    throw new Error(`${error.message}`);
  }
}

const createShopifyDiscountCode = async (
  input: DiscountInput,
  shop: string,
  storeAccessToken: string,
) => {
  console.log("createShopifyDiscountCode function start");

  const url = `https://${shop}/admin/api/2024-10/graphql.json`; // GraphQL endpoint
  const query = `
      mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
        discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
          codeDiscountNode {
            id
            codeDiscount {
              ... on DiscountCodeBasic {
                title
                  codes(first: 10) {
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

  try {
    let discountValue: any;

    if (input.discount_type === "fixed_amount") {
      discountValue = {
        discountAmount: {
          amount: input.discount_amount!.toString(),
          appliesOnEachItem: false, // or true, depending on your needs
        },
      };
    } else {
      discountValue = {
        percentage: input.discount_percentage! / 100, // Shopify expects a decimal between 0 and 1
      };
    }

    console.log("discountValue is: ", discountValue);
    const appliesOncePerCustomer = input.use_limit_type === "once_per_customer";
    // const appliesOncePerCustomer = false;
    const usageLimit = input.use_limit_type === "single_use" ? 1 : null;

    // Declare basicCodeDiscount as an object with index signatures to handle dynamic fields
    const basicCodeDiscount: { [key: string]: any } = {
      title: input.discount_code_name,
      code: input.discount_code,
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
      appliesOncePerCustomer: appliesOncePerCustomer,
      usageLimit: usageLimit,
    };

    if (input.minimum_spending && input.minimum_spending > 0) {
      basicCodeDiscount.minimumRequirement = {
        subtotal: {
          greaterThanOrEqualToSubtotal: input.minimum_spending.toString(),
        },
      };
    }

    console.log(
      "createShopifyDiscountCode function start create basic code",
      basicCodeDiscount,
    );

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": storeAccessToken, // Use the access token
        // "X-Shopify-Access-Token": "shpua_e6bd9327bcb8f0a8e72fcd743250ce88", // Use the access token
      },
      body: JSON.stringify({
        query,
        variables: {
          basicCodeDiscount: basicCodeDiscount,
        },
      }),
    });

    console.log("createShopifyDiscountCode function done create basic code");

    if (!response.ok) {
      throw new Error(`無法於商店建立優惠碼： ${response.statusText}`);
    }

    const result = await response.json();

    const responseData = result.data?.discountCodeBasicCreate;

    if (responseData?.userErrors && responseData.userErrors.length > 0) {
      const errors = responseData.userErrors
        .map((error: { message: string }) => error.message)
        .join(", ");
      throw new Error(`Shopify error: ${errors}`);
    }

    // const webstore_discount_code_id = responseData.codeDiscountNode.id;
    // console.log("webstore discount code id: ", webstore_discount_code_id);
    // const codeDiscount = responseData.codeDiscountNode.codeDiscount;
    // console.log("codeDiscount: ", codeDiscount);

    const createdDiscount = responseData.codeDiscountNode;
    console.log(createdDiscount);

    return createdDiscount;
  } catch (error) {
    console.error("Error creating Shopify discount:", error);
    throw error;
  }
};
