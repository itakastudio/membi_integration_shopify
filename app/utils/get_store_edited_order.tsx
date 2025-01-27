// // app/utils/get_store_edited_order.tsx

// interface storeAccess {
//   shop: string;
//   accessToken: string;
//   input?: any;
// }

// const GET_EDITED_ORDER = `
//   query {order(id: "gid://shopify/Order/6200731402540") {
//     id
//     name
//     phone
//     email
//     customer {
//       id
//       displayName
//       email
//       phone
//       defaultAddress {
//         phone
//       }
//     }
//     discountApplications (first: 20) {
//       nodes {
//         targetSelection
//         targetType
//         allocationMethod
//         value {
//           ... on MoneyV2 {
//             amount
//             currencyCode
//           }
//           ... on PricingPercentageValue {
//             percentage
//           }
//         }
//         index
//       }
//     }
//     discountCode
//     discountCodes
    
//     currentTotalPriceSet {
//       shopMoney {
//         amount
//       }
//     }

//     currentCartDiscountAmountSet {
//       shopMoney {
//         amount
//       }
//     }
//     totalShippingPriceSet {
//       shopMoney {
//         amount
//       }
//     }
//     currentShippingPriceSet {
//       shopMoney {
//         amount
//       }
//     }

//     currentSubtotalPriceSet {
//       shopMoney {
//         amount
//       }
//     }
//     currentTotalPriceSet {
//       shopMoney {
//         amount
//       }
//     }

//     lineItems(first: 50) {
//       nodes {
//         id
//         variant {
//           id
//           price
//           title
//           sku
//         }
//         product {
//           id
//           title
//         }
//         name
//         currentQuantity
//         quantity
//         sku
//         title
//         totalDiscountSet {
//           shopMoney {
//             amount
//           }
//         }
//         discountAllocations {
//           allocatedAmountSet {
//             shopMoney {
//               amount
//             }
//           }
//           discountApplication {
//             targetSelection
//             targetType
//             allocationMethod
//             value {
//               ... on MoneyV2 {
//                 amount
//                 currencyCode
//               }
//               ... on PricingPercentageValue {
//                 percentage
//               }
//             }
//             index
//           }
//         }
//       }
//     }
//   }
// }`;


// // additionalFees(id,name,price)
// export async function getStoreEditedOrder(
//   shop: string,
//   accessToken: string,
//   order_id: string,
// ): Promise<storeAccess> {
//   console.log("getStoreEditedOrder function begin");

//   console.log("shop in request: ", shop);
//   console.log("order_id in request: ", order_id);

//   try {
//     const result = await fetch(
//       `https://${shop}/admin/api/2024-10/graphql.json`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Shopify-Access-Token": accessToken,
//         },
//         body: JSON.stringify({
//           query: GET_EDITED_ORDER,
//           // variables: {
//           //   // id: `gid://shopify/Order/${order_id}`,
//           //   "\id: 'gid://shopify/Order/6200736645420'"
//           // },
//         }),
//       },
//     );

//     const response = await result.json();

//     console.log("response from getStoreEditedOrder function: ", JSON.stringify(response, null, 2))

//     return response;
//   } catch (error) {
//     console.error("Error in getStoreEditedOrder function:", error);
//     throw error;
//   }
// }
