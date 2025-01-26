// app/routes/webhooks.app.order_create.tsx
import { getStoreEditedOrder } from "app/utils/get_store_edited_order";
import { authenticate } from "../shopify.server";
import { getStoreAccessInfoWebhook } from "app/utils/get_store_access_info_webhook";

export const action = async ({ request }: any) => {
  console.log(`Received order_create webhook`);

  const webhookInfo = await authenticate.webhook(request);
  const { shop, topic, payload } = webhookInfo;

  console.log(`order_create webhook for: `, shop);
  console.log(`order_create webhook for: `, topic);
  console.log(
    `order_create webhook payload: `,
    JSON.stringify(payload, null, 2),
  );

  const order_id = payload.order_edit.order_id;
  console.log(`order_id: `, order_id);
  const { accessToken } = await getStoreAccessInfoWebhook(shop);

  const orderData = await getStoreEditedOrder(shop, accessToken, order_id);

  return orderData;

  console.log(`order_create webhook payload: `, JSON.stringify(payload, null, 2));

  const backendUrl = process.env.BACKEND_URL;
  console.log(`backendUrl: `, backendUrl);

  try {
    const response = await fetch(
      `${backendUrl}/shopify/shopify_webhook/webhook_order_edited`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shop,
          payload,
        }),
      },
    );

    console.log(`response: `, response);

    if (!response.ok) {
      console.error("Failed to send data to backend:", response.statusText);
      return new Response("Failed to process webhook", { status: 500 });
    }

    return new Response("Webhook processed successfully", { status: 200 });
  } catch (error) {
    console.error("Error inserting order into database:", error);
    return new Response("Internal server error", { status: 500 });
  }
};
