// app/routes/webhooks.app.order_edited.ts

import { authenticate } from "../shopify.server";

export const action = async ({ request }: any) => {
  console.log(`Received order_created webhook`);
  
  const { shop, topic } = await authenticate.webhook(request);
  console.log(`Received order_created webhook for ${shop}`);
  console.log(`Received ${topic} webhook for ${shop}`);

  return new Response();
};