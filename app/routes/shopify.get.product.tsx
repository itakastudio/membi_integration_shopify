
// app/routes/shopify.get.product.tsx

import { LoaderFunctionArgs } from "@remix-run/node";
import { getStoreAccessInfo } from "app/utils/get_store_access_info";

interface storeAccess {
  shop: string;
  accessToken: string;
}

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("receive an api call, // app/routes/shopify.get.product");

  const storeAccess: storeAccess = await getStoreAccessInfo(request);
  const { shop, accessToken } = storeAccess;
  console.log("shop", shop);
  console.log("storeAccessToken in prisma", accessToken);


  fetchShopDataGraphQL(shop, accessToken)
    .then((data) => console.log("Shop data (GraphQL):", data.data))
    .catch((err) => console.error("Error:", err));

  return null;  
}


const fetchShopDataGraphQL = async (shop: string, storeAccessToken: string) => {

  const url = `https://${shop}/admin/api/2024-10/graphql.json`; // GraphQL endpoint
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

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": storeAccessToken, // Use the access token
      
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  console.log("data", data.data);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  return data;
};
