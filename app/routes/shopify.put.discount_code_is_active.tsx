import { ActionFunctionArgs } from "@remix-run/node";
import { getStoreAccessInfo } from "app/utils/get_store_access_info";

const DEACTIVATE_DISCOUNT_CODE_MUTATION = `
  mutation discountCodeDeactivate($id: ID!) {
    discountCodeDeactivate(id: $id) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
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

const ACTIVATE_DISCOUNT_CODE_MUTATION = `
  mutation discountCodeActivate($id: ID!) {
    discountCodeActivate(id: $id) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
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
  console.log("Receive an API call, // shopify.put_discount_code_is_active");

  const { shop, accessToken, input } = await getStoreAccessInfo(request);

  console.log("input: ", input);
  const { webstore_discount_code_id, is_active, valid_from, valid_until } = input;

  console.log("webstore_discount_code_id: ", webstore_discount_code_id);
  console.log("is_active: ", is_active);
  console.log("valid_from: ", valid_from);
  console.log("valid_until: ", valid_until);

  try {
    
    if (is_active) {

      console.log("is_active true is running");
      // Activate the discount code
      const activateResult = await fetch(
        `https://${shop}/admin/api/2024-10/graphql.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": accessToken,
          },
          body: JSON.stringify({
            query: ACTIVATE_DISCOUNT_CODE_MUTATION,
            variables: {
              id: webstore_discount_code_id,
            },
          }),
        }
      );

      const activateResponse = await activateResult.json();

      if (
        activateResponse.data?.discountCodeActivate?.userErrors &&
        activateResponse.data.discountCodeActivate.userErrors.length > 0
      ) {
        const errors = activateResponse.data.discountCodeActivate.userErrors
          .map((e: { message: string }) => e.message)
          .join(", ");
        throw new Error(`Shopify activation error: ${errors}`);
      }

      console.log("Activated discount code:", activateResponse);

      // Update the discount code validity period
      const updateResult = await fetch(
        `https://${shop}/admin/api/2024-10/graphql.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": accessToken,
          },
          body: JSON.stringify({
            query: UPDATE_DISCOUNT_CODE_MUTATION,
            variables: {
              id: webstore_discount_code_id,
              basicCodeDiscount: {
                startsAt: valid_from,
                endsAt: valid_until,
              },
            },
          }),
        }
      );

      const updateResponse = await updateResult.json();

      if (
        updateResponse.data?.discountCodeBasicUpdate?.userErrors &&
        updateResponse.data.discountCodeBasicUpdate.userErrors.length > 0
      ) {
        const errors = updateResponse.data.discountCodeBasicUpdate.userErrors
          .map((e: { message: string }) => e.message)
          .join(", ");
        throw new Error(`Shopify update error: ${errors}`);
      }

      return {
        message: "Discount code activated and updated successfully.",
        data: updateResponse.data.discountCodeBasicUpdate.codeDiscountNode,
      };
    } else {
      
      console.log("is_active false is running");
      
      // Deactivate the discount code
      const deactivateResult = await fetch(
        `https://${shop}/admin/api/2024-10/graphql.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": accessToken,
          },
          body: JSON.stringify({
            query: DEACTIVATE_DISCOUNT_CODE_MUTATION,
            variables: {
              id: webstore_discount_code_id,
            },
          }),
        }
      );

      console.log("Deactivate result:", deactivateResult);

      const deactivateData = await deactivateResult.json();

      const deactivateResponse = deactivateData.data?.discountCodeDeactivate

      console.log("deactivateResponse:", deactivateResponse);

      if (
        deactivateResponse?.userErrors &&
        deactivateResponse.userErrors.length > 0
      ) {
        const errors = deactivateResponse.userErrors
          .map((e: { message: string }) => e.message)
          .join(", ");
        throw new Error(`Shopify deactivation error: ${errors}`);
      }

      return {
        message: "Discount code deactivated successfully.",
        data: deactivateResponse.codeDiscountNode,
      };
    }
  } catch (error: any) {
    console.error("Error updating discount code status:", error.message);
    throw new Error(error.message);
  }
}
