import { json } from "@remix-run/node";
import { Shopify } from "@shopify/shopify-api";

export async function loader({ request }: { request: Request }) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return json({ error: "Unauthorized" }, { status: 401 });
  }

  const sessionToken = authHeader.replace("Bearer ", ""); // Extract the token

  try {
    // Validate the session token
    const payload = await Shopify.Utils.decodeSessionToken(sessionToken);

    console.log("Session token payload:", payload);

    // Perform the action (e.g., fetch product data)
    return json({ products: [] }); // Replace with real data
  } catch (error) {
    console.error("Invalid session token:", error);
    return json({ error: "Unauthorized" }, { status: 401 });
  }
}