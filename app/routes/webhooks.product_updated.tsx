// app/routes/webhooks.product_updated.tsx

import pool from "app/pg.server";
import { authenticate } from "../shopify.server";

export const action = async ({ request }: any) => {
  console.log(`Received product_updated 1webhook`);
  console.log(`Received product_updated 1webhook`);
  console.log(`Received product_updated 1webhook`);
  console.log(`Received product_updated webhook`);

  // console.log(`Received product_updated webhook`, request);  
  const { shop, topic } = await authenticate.webhook(request);
  console.log(`Received product_updated webhook for`);
  console.log(`Received product_updated webhook for ${shop}`);
  console.log(`Received ${topic} webhook for ${shop}`);

  const client = await pool.connect()

  const result = await client.query(
    "SELECT * FROM system_tenant_login",
  );

  console.log(result.rows);

  return new Response();
};