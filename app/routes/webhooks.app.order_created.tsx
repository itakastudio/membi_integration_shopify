// app/routes/webhooks.app.order_created.tsx

import { authenticate } from "../shopify.server";
import prisma from "../../external-db/db";
export const action = async ({ request }: any) => {
  console.log(`Received order_created webhook`);
  
  try {
    // 確認 Prisma 是否連接到 PostgreSQL
    const dbCheck = await prisma.$queryRaw`SELECT 1`;
    console.log("Database connection successful:", dbCheck);

    const { shop, topic } = await authenticate.webhook(request);
    console.log(`Received order_created webhook for ${shop}`);
    console.log(`Received ${topic} webhook for ${shop}`);

    return new Response();
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return new Response("Database connection failed", { status: 500 });
  }
};