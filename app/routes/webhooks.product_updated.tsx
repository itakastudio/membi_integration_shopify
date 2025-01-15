// app/routes/webhooks.product_updated.tsx

import { authenticate } from "../shopify.server";

export const action = async ({ request }: any) => {
  console.log(`Received product_updated webhook`);
  
  const { shop, topic } = await authenticate.webhook(request);
  console.log(`Received product_updated webhook for ${shop}`);
  console.log(`Received ${topic} webhook for ${shop}`);

  return new Response();
};