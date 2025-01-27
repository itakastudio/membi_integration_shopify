// app/routes/webhooks.app.order_cancelled.tsx
import { authenticate } from "../shopify.server";

export const action = async ({ request }: any) => {
  console.log(`Received order_cancelled webhook`);

  const webhookInfo = await authenticate.webhook(request);
  const { shop, topic, payload } = webhookInfo;

  console.log(`order_cancelled webhook for: `, shop);
  console.log(`order_cancelled webhook for: `, topic);
  console.log(`order_cancelled webhook payload: `, payload);
  // console.log(`order_cancelled webhook payload: `, JSON.stringify(payload, null, 2));

  const backendUrl = process.env.BACKEND_URL;
  console.log(`backendUrl: `, backendUrl);

  try {
    const response = await fetch(`${backendUrl}/shopify/shopify_webhook/webhook_order_cancelled`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shop,
        payload
      }),
    });

    // console.log(`response: `, response);

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