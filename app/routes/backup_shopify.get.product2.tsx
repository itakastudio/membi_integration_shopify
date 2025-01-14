// app/routes/shopify.get.product.tsx

import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { useEffect } from "react";
import createApp from "@shopify/app-bridge";
import { getSessionToken } from "@shopify/app-bridge-utils";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("receive an api call");

  try {
    // console.log("Request Headers:", request.headers);
    const app = createApp({
      apiKey: "b59f4bedf162375d9261063c3bf2feb1", // API key from the Partner Dashboard
      // host: "webhook-manager-app.myshopify.com", // host from URL search parameter
      host: "YWRtaW4uc2hvcGlmeS5jb20vc3RvcmUvd2ViaG9vay1tYW5hZ2VyLWFwcA==", // Extract the host from the URL
    });

    console.log("app", app);

    const sessionToken = await getSessionToken(app);

    console.log("sessionToken", sessionToken);

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
  useEffect(() => {});
}