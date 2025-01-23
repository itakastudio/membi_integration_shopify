// // app/routes/webhooks.app.order_updated.tsx

// import pool from "app/pg.server";
// import { authenticate } from "../shopify.server";

// export const action = async ({ request }: any) => {
//   console.log("Received order_updated webhook");

//   // 驗證 Webhook 請求
//   const response = await authenticate.webhook(request);
//   const orderData = response.payload;
//   console.log(`Received orders/update webhook for: ${JSON.stringify(orderData, null, 2)}`);
//   // console.log(`Received orders/update webhook for: ${JSON.stringify(orderData, null, 2)}`);
//   // console.log(`Received orders/update webhook for: ${JSON.stringify(orderData, null, 2)}`);

//   const client = await pool.connect(); // 開始交易
//   await client.query("SET search_path TO public;");

//   try {
//     const shopifyOrderId = orderData.id;
//     const deliveryDate = orderData.delivery_date || null;
//     const totalPrice = orderData.total_price;

//     // 確認是否有履行記錄，使用 fulfillments
//     let orderFulfilledDate = null;
//     if (orderData.fulfillments && orderData.fulfillments.length > 0) {
//       const fulfillmentData = orderData.fulfillments[0]; // 取第一筆履行記錄
//       orderFulfilledDate = fulfillmentData.created_at || null;
//     }

//     await client.query("BEGIN"); // 開始交易

//     // 檢查訂單是否已經存在
//     console.log(`Checking if order ${shopifyOrderId} exists...`);
//     const orderExists = await client.query(
//       `
//       SELECT order_id FROM member_order WHERE webstore_order_id = $1
//     `,
//       [shopifyOrderId]
//     );

//     if (orderExists.rowCount === 0) {
//       console.log(`Order ${shopifyOrderId} does not exist. Skipping update.`);
//       await client.query("ROLLBACK");
//       return new Response("Order does not exist", { status: 404 });
//     }

//     const orderId = orderExists.rows[0].order_id; // 確保只使用一個 order_id

//     // 更新訂單基本信息
//     console.log(`Updating order ${shopifyOrderId}...`);
//     const query = `
//       UPDATE member_order
//       SET order_fulfilled_date = $1, delivery_date = $2, total_price = $3
//       WHERE order_id = $4
//     `;
//     const values = [orderFulfilledDate, deliveryDate, totalPrice, orderId];
//     await client.query(query, values);

//     // 更新折扣碼：先刪除再重新插入
//     console.log(`Updating discount codes for order ${shopifyOrderId}...`);
//     await client.query(
//       `
//       DELETE FROM order_discounts WHERE order_id = $1
//     `,
//       [orderId]
//     );

//     const discountCodes = orderData.discount_codes || [];
//     for (const discount of discountCodes) {
//       await client.query(
//         `
//         INSERT INTO order_discounts (order_id, discount_code, discount_type, discount_amount)
//         VALUES ($1, $2, $3, $4)
//       `,
//         [
//           orderId,
//           discount.code || null,
//           discount.type || "UNKNOWN",
//           parseFloat(discount.amount) || 0,
//         ]
//       );
//     }

//     await client.query("COMMIT"); // 提交交易
//     console.log(`Order updated successfully: ${shopifyOrderId}`);
//     return new Response("Order updated successfully", { status: 200 });
//   } catch (error) {
//     await client.query("ROLLBACK"); // 發生錯誤時回滾
//     console.error("Error updating order in database:", error);
//     return new Response("Internal server error", { status: 500 });
//   } finally {
//     client.release(); // 釋放連接
//   }
// };
