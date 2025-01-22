// app/utils/shopifyAccessToken.tsx

import prisma from "../db.server";

interface storeAccess {
  shop: string;
  accessToken: string;
  input?: any;
}

export async function getStoreAccessInfo(request: Request): Promise<storeAccess> {
  console.log("getShopifyAccessToken function begin");

  // the request sent from backend need to be with shop in header

  const data = await request.json();
  // console.log("Data from request body:", data);

  const shop = data.shop;
  const input = data.input;

  if (!shop) {
    throw new Error("Missing shop header");
  }
  console.log("shop in request: ", shop);

  try {
    console.log("shop", shop);

    const session = await prisma.session.findUnique({
      where: {
        id: `offline_${shop}`, // `id` is typically prefixed with `offline_` for offline access tokens
      },
    });

    if (!session) {
      console.error("Session not found for shop:", shop);
      throw new Error("Session not found");
    }

    const { accessToken } = session;
    console.log("Access token:", accessToken);
    console.log("getShopifyAccessToken function done");

    const storeAccess = {
      shop: shop,
      accessToken: accessToken,
      input: input,
    }

    return storeAccess
  } catch (error) {
    console.error("Error in getShopifyAccessToken function:", error);
    throw error;
  }
}