// This works!


// // // app/routes/shopify.get.product.tsx

// import { LoaderFunctionArgs } from "@remix-run/node";

// export async function loader({ request }: LoaderFunctionArgs) {
//   console.log("receive an api call");

//   fetchShopDataGraphQL()
//     .then((data) => console.log("Shop data (GraphQL):", data))
//     .catch((err) => console.error("Error:", err));

//     return null
// }

// const fetchShopDataGraphQL = async () => {


//   const url = `https://webhook-manager-app.myshopify.com/admin/api/2024-10/graphql.json`; // GraphQL endpoint
//   console.log("url", url);


//   const query = `
//     {
//     products(first: 3) {
//       edges {
//         node {
//           id
//           title
//         }
//       }
//     }
//   }
//   `;

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       // "X-Shopify-Access-Token": "accessToken", // Use the access token
//       "X-Shopify-Access-Token": "shpua_e6bd9327bcb8f0a8e72fcd743250ce88", // Use the access token
//     },
//     body: JSON.stringify({ query }),
//   });

//   const data = await response.json();
//   console.log("data", data.data.products.edges);

//   if (!response.ok) {
//     throw new Error(`Failed to fetch data: ${response.statusText}`);
//   }
  
//   return data;
// };
