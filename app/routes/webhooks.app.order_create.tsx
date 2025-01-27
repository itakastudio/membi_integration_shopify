// app/routes/webhooks.app.order_create.tsx
import { getBackendShopifyMembiSetting } from "app/utils/get_backend_shopify_membi_setting";
import { authenticate } from "../shopify.server";

export const action = async ({ request }: any) => {
  console.log(`Received order_create webhook`);

  const webhookInfo = await authenticate.webhook(request);
  const { shop, topic, payload } = webhookInfo;

  console.log(`order_create webhook for: `, shop);
  console.log(`order_create webhook for: `, topic);
  // console.log(`order_create webhook payload: `, JSON.stringify(payload, null, 2));

  const backendUrl = process.env.BACKEND_URL;
  console.log(`backendUrl: `, backendUrl);

  const backendSetting = await getBackendShopifyMembiSetting(shop);

  if (!backendSetting.fn_w_order_to_membi) {
    console.log(`fn_w_order_to_membi is not enabled`);
    return new Response('fn_w_order_to_membi is not enabled', { status: 200 });
  }

  try {
    const response = await fetch(`${backendUrl}/shopify/shopify_webhook/webhook_order_create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shop,
        payload
      }),
    });

    console.log(`response: `, response);

    if (!response.ok) {
      console.error('Failed to send data to backend:', response.statusText);
      return new Response('Failed to process webhook', { status: 500 });
    }

    return new Response('Webhook processed successfully', { status: 200 });
  } catch (error) {
    console.error('Error inserting order into database:', error);
    return new Response('Internal server error', { status: 500 });
  };
}