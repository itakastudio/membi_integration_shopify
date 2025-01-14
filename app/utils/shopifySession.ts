import createApp from "@shopify/app-bridge";
import { getSessionToken } from "@shopify/app-bridge-utils";

// Initialize Shopify App Bridge
export const initializeShopifyAppBridge = () => {
  // const host = new URLSearchParams(window.location.search).get("host"); // Extract the host from the URL

  const apiKey = "b59f4bedf162375d9261063c3bf2feb1"; // Replace with your actual API key

  // const host = "https://webhook-manager-app.myshopify.com"; // Extract the host from the URL
  // const host = "aHR0cHM6Ly93ZWJob29rLW1hbmFnZXItYXBwLm15c2hvcGlmeS5jb20NCg"; // Extract the host from the URL
  // const host = "webhook-manager-app.myshopify.com"; // Extract the host from the URL
  // const host = "d2ViaG9vay1tYW5hZ2VyLWFwcC5teXNob3BpZnkuY29t"; // Extract the host from the URL

  // const host = "admin.shopify.com/store/webhook-manager-app"; // Extract the host from the URL
  const host = "YWRtaW4uc2hvcGlmeS5jb20vc3RvcmUvd2ViaG9vay1tYW5hZ2VyLWFwcA"; // Extract the host from the URL
  // const host = "YWRtaW4uc2hvcGlmeS5jb20vc3RvcmUvd2ViaG9vay1tYW5hZ2VyLWFwcA=="; // Extract the host from the URL
  
  
  // const host = "https://ports-hurricane-designer-bus.trycloudflare.com/"; // Extract the host from the URL

  if (!host) {
    throw new Error("Missing host parameter in URL.");
  }

  return createApp({
    apiKey,
    host,
  });
};

// Fetch the session token
export const fetchSessionToken = async () => {
  const app = initializeShopifyAppBridge();
  try {
    const sessionToken = await getSessionToken(app);
    console.log("sessionToken", sessionToken);
    
    return sessionToken;
  } catch (error) {
    console.error("Failed to fetch session token:", error);
    throw error;
  }
};