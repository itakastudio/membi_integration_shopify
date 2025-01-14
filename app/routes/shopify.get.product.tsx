// // app/routes/shopify.get.product.tsx

// import { LoaderFunctionArgs } from "@remix-run/node";
import { GraphqlClient, shopify } from "@shopify/shopify-api";
import { authenticate } from "../shopify.server";
// // import { useEffect } from "react";
// // import createApp from "@shopify/app-bridge";
// // import { getSessionToken } from "@shopify/app-bridge-utils";

// const shop = "webhook-manager-app.myshopify.com"; // Shop URL from your session
// const accessToken = "shpua_8ea5f3bf40e5686842839f9213192db4"; // Access token from your session

// const client = new shopify.clients.Graphql({session});

// // const client = new GraphqlClient(shop, accessToken); // GraphQL client

// async function fetchShopDataGraphQL2() {
//   const query = `
// {
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

//   try {
//     const response = await client.query({ data: query });
//     console.log("Shop data (GraphQL):", response.body);
//   } catch (err) {
//     console.error("Error fetching shop data (GraphQL):", err);
//   }
// }


// export async function loader({ request }: LoaderFunctionArgs) {
//   console.log("receive an api call");
//   // const shop = "webhook-manager-app.myshopify.com"; // Shop URL from your session
//   // const accessToken = "shpua_8ea5f3bf40e5686842839f9213192db4"; // Access token from your session

//   // const client = new Shopify.Clients.Graphql(shop, accessToken); // GraphQL client

//   console.log("request: ", request);

//   fetchShopDataGraphQL()
//     .then((data) => console.log("Shop data (GraphQL):", data))
//     .catch((err) => console.error("Error:", err));

//     return null
// }

// const fetchShopDataGraphQL = async () => {

//   // const url = `https://${shop}/admin/api/2024-10/graphql.json`; // GraphQL endpoint
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
//       "X-Shopify-Access-Token": "shpua_8ea5f3bf40e5686842839f9213192db4", // Use the access token
//     },
//     body: JSON.stringify({ query }),
//   });

//   console.log("response", response);

//   if (!response.ok) {
//     throw new Error(`Failed to fetch data: ${response.statusText}`);
//   }

//   const data = await response.json();
//   return data;
// };


// app/routes/shopify.get.product.tsx

import { LoaderFunctionArgs } from "@remix-run/node";
// import { authenticate } from "../shopify.server";
// import { useEffect } from "react";
// import createApp from "@shopify/app-bridge";
// import { getSessionToken } from "@shopify/app-bridge-utils";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("receive an api call");


  // console.log("request: ", request);

  fetchShopDataGraphQL(request)
    .then((data) => console.log("Shop data (GraphQL):", data))
    .catch((err) => console.error("Error:", err));

    return null
}

const fetchShopDataGraphQL = async (request: Request) => {
  // const shop = "webhook-manager-app.myshopify.com"; // Shop URL from your session
  // const accessToken = "shpua_8ea5f3bf40e5686842839f9213192db4"; // Access token from your session

  // const url = `https://${shop}/admin/api/2024-10/graphql.json`; // GraphQL endpoint
  if (!request) {
    throw new Error("Request is undefined");
  }
  const { admin } = await authenticate.admin(request);

  


  const url = `https://webhook-manager-app.myshopify.com/admin/api/2024-10/graphql.json`; // GraphQL endpoint
  console.log("url", url);


  const query = `
    {
    products(first: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
  `;
  // const client = new shopify.clients.Graphql("shpua_8ea5f3bf40e5686842839f9213192db4");

  const response = await admin.graphql(query)
  console.log("response", response);


  // const result = await client.query({data: {query}});

  // console.log("result", result);

  // const response = await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     // "X-Shopify-Access-Token": "accessToken", // Use the access token
  //     "X-Shopify-Access-Token": "shpua_8ea5f3bf40e5686842839f9213192db4", // Use the access token
  //   },
  //   body: JSON.stringify({ query }),
  // });

  // console.log("response", response);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};
