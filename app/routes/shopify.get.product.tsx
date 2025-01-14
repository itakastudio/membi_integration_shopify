// app/routes/shopify.get.product.tsx


import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { useEffect } from "react";


export async function loader({ request }: LoaderFunctionArgs) {

  console.log("receive an api call");

  // console.log("Request Headers:", request.headers);


  try {
    const { admin } = await authenticate.admin(request);
    console.log("shopify authenticate pass, admin", admin);

    const response = await admin.graphql(`{ shop { name } }`);
    console.log("response", response);

    return response;
  } catch (error) {
    console.error("Authentication failed:", error);
    // Handle error appropriately (e.g., return an error response)
    return new Response("Authentication failed", { status: 401 });
  }
}


export default function Index() {


  useEffect(() => {
  })


}

// export const loader = async ({ request }: any) => {

//   // console.log("receive an api call, request", request);
//   console.log("receive an api call");
//   // console.log("before shopify authenticate, admin", abc);

//   const { admin } = await authenticate.admin(request);
//   console.log("shopify authenticate pass, admin", admin);

//   const response = await admin.graphql(
//     `#graphql
//     query ProductMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
//       product(id: $ownerId) {
//         linerMaterial: metafield(namespace: $namespace, key: $key) {
//           value
//         }
//       }
//     }`,
//     {
//       variables: {
//         "namespace": "my_fields",
//         "key": "liner_material",
//         "ownerId": "gid://shopify/Product/108828309"
//       },
//     },
//   );

//   console.log("response", response);

//   const data = await response.json();

//   console.log("data", data);



//   return new Response();
// };