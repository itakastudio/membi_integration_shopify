import { ActionFunctionArgs } from "@remix-run/node";
import { getStoreAccessInfo } from "app/utils/get_store_access_info";

const UPDATE_DISCOUNT_CODE_MUTATION = `
  mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            startsAt
            endsAt
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

export async function action({ request }: ActionFunctionArgs) {
  console.log("Receive an API call, // shopify.put_discount_code_detail");

  const { shop, accessToken, input } = await getStoreAccessInfo(request);
  const {
    shopify_discount_code_id,
    discount_type,
    discount_code_name,
    discount_amount,
    discount_percentage,
    use_limit_type,
    minimum_spending,
    valid_from,
    valid_until,
  } = input;

  try {
    let discountValue: any;

    if (discount_type === "fixed_amount") {
      discountValue = {
        discountAmount: {
          amount: discount_amount.toString(),
          appliesOnEachItem: false,
        },
      };
    } else if (discount_type === "percentage") {
      discountValue = {
        percentage: discount_percentage / 100,
      };
    } else {
      throw new Error(`Invalid discount_type: ${discount_type}`);
    }

    let appliesOncePerCustomer = false;
    let usageLimit: number | null = null;

    if (use_limit_type === "single_use") {
      usageLimit = 1;
    } else if (use_limit_type === "once_per_customer") {
      appliesOncePerCustomer = true;
    }

    const basicCodeDiscount: { [key: string]: any } = {
      title: discount_code_name,
      startsAt: valid_from,
      endsAt: valid_until,
      customerGets: {
        items: {
          all: true,
        },
        value: discountValue,
      },
      customerSelection: {
        all: true,
      },
    };

    if (minimum_spending && minimum_spending > 0) {
      basicCodeDiscount.minimumRequirement = {
        subtotal: {
          greaterThanOrEqualToSubtotal: minimum_spending.toString(),
        },
      };
    }

    if (appliesOncePerCustomer) {
      basicCodeDiscount.appliesOncePerCustomer = true;
    }

    if (usageLimit !== null) {
      basicCodeDiscount.usageLimit = usageLimit;
    }

    const result = await fetch(`https://${shop}/admin/api/2024-10/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: JSON.stringify({
        query: UPDATE_DISCOUNT_CODE_MUTATION,
        variables: {
          id: shopify_discount_code_id,
          basicCodeDiscount,
        },
      }),
    });

    const response = await result.json();

    if (
      response.data?.discountCodeBasicUpdate?.userErrors &&
      response.data.discountCodeBasicUpdate.userErrors.length > 0
    ) {
      const errors = response.data.discountCodeBasicUpdate.userErrors
        .map((e: { message: string }) => e.message)
        .join(", ");
      throw new Error(`Shopify update error: ${errors}`);
    }

    return {
      message: "Discount code updated successfully.",
      data: response.data.discountCodeBasicUpdate.codeDiscountNode,
    };
  } catch (error: any) {
    console.error("Error updating discount code:", error.message);
    throw new Error(error.message);
  }
}
