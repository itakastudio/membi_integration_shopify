import pool from "app/pg.server";
import { authenticate } from "../shopify.server";

export const action = async ({ request }: any) => {
  console.log("Received order fulfillment webhook");

  // 驗證 Webhook 請求
  const response = await authenticate.webhook(request);
  const orderData = response.payload;

  console.log(`Received order_fulfillment webhook for`, JSON.stringify(orderData, null, 2));
  const client = await pool.connect(); // 開始交易
  await client.query("SET search_path TO public;");
  try {
    // 獲取 Shopify 訂單 ID
    const shopifyOrderId = orderData.id;

    // 開啟事務
    await client.query("BEGIN");

    // 確認是否有履行記錄
    if (orderData.fulfillments && orderData.fulfillments.length > 0) {
      const fulfillmentData = orderData.fulfillments[0]; // 取第一筆履行記錄
      const orderFulfilledDate = fulfillmentData.created_at || null;

      console.log("Received fulfillment data:", fulfillmentData);

      // 檢查訂單是否已經存在
      const orderExists = await client.query(
        `SELECT * FROM member_order WHERE webstore_order_id = $1`,
        [shopifyOrderId]
      );

      if (orderExists.rowCount === 0) {
        console.log(`Order ${shopifyOrderId} does not exist. Skipping fulfillment.`);
        await client.query("ROLLBACK"); // 回滾交易
        return new Response("Order does not exist", { status: 404 });
      }

      // 更新訂單履行日期
      if (orderFulfilledDate) {
        await client.query(
          `
          UPDATE member_order
          SET order_fulfilled_date = $1
          WHERE webstore_order_id = $2
        `,
          [orderFulfilledDate, shopifyOrderId]
        );

        console.log("Order fulfillment date updated:", orderFulfilledDate);
      } else {
        console.log("No fulfillment date provided.");
      }

      // 處理訂單的折扣碼
      const discountCodes = orderData.discount_codes || [];
      for (const discount of discountCodes) {
        await client.query(
          `
          INSERT INTO order_discounts (order_id, discount_code, discount_type, discount_amount)
          VALUES (
            (SELECT order_id FROM member_order WHERE webstore_order_id = $1 LIMIT 1),
            $2, $3, $4
          )
        `,
          [shopifyOrderId, discount.code, discount.type || "UNKNOWN", discount.amount || 0]
        );
      }

      console.log("Order fulfillment updated:", shopifyOrderId);
    } else {
      console.log("No fulfillments found for this order.");
      await client.query("ROLLBACK"); // 回滾交易
      return new Response("No fulfillment data found", { status: 200 });
    }

    await client.query("COMMIT"); // 提交交易
    return new Response("Webhook processed successfully", { status: 200 });
  } catch (error) {
    await client.query("ROLLBACK"); // 失敗時回滾交易
    console.error("Error processing fulfillment webhook:", error);
    return new Response("Internal server error", { status: 500 });
  } finally {
    client.release(); // 釋放連接
  }
};
