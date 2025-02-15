// app/utils/shopifyAccessToken.tsx

import prisma from "../db.server";

interface storeAccess {
  shop: string;
  accessToken: string;
}

export async function getStoreAccessInfoWebhook(shop: string): Promise<storeAccess> {
  console.log("getStoreAccessInfoWebhook function begin");

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
    console.log("getStoreAccessInfoWebhook function done");

    const storeAccess = {
      shop: shop,
      accessToken: accessToken,
    }

    return storeAccess
  } catch (error) {
    console.error("Error in getStoreAccessInfoWebhook function:", error);
    throw error;
  }
}