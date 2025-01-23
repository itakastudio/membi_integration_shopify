import { authenticate } from "../shopify.server";
import pool from "app/pg.server";

export const action = async ({ request }: any) => {
  console.log("Received order_cancelled webhook");

  const client = await pool.connect(); // 開始資料庫連接
  await client.query("SET search_path TO public;");
  try {
    const response = await authenticate.webhook(request);
    const orderData = response.payload;
    const shopifyOrderId = orderData.id;

    console.log(`Received order_cancelled webhook for: ${JSON.stringify(orderData, null, 2)}`);

    // 檢查訂單是否存在
    const orderExistsQuery = `
      SELECT order_id FROM member_order WHERE webstore_order_id = $1
    `;
    const orderExists = await client.query(orderExistsQuery, [shopifyOrderId]);

    if (orderExists.rowCount === 0) {
      console.log(`Order ${shopifyOrderId} does not exist. Skipping delete.`);
      return new Response("Order does not exist", { status: 404 });
    }

    const orderId = orderExists.rows[0].order_id;

    console.log(`Deleting associated data for order: ${shopifyOrderId} (Order ID: ${orderId})`);

    // 刪除訂單附屬資料
    try {
      const deleteLineItemsQuery = `
        DELETE FROM order_line_items WHERE order_id = $1
      `;
      const deleteDiscountsQuery = `
        DELETE FROM order_discounts WHERE order_id = $1
      `;
      await client.query(deleteLineItemsQuery, [orderId]);
      await client.query(deleteDiscountsQuery, [orderId]);
      console.log(`Associated data deleted for order: ${shopifyOrderId}`);
    } catch (err) {
      console.error("Error deleting associated data:", err);
      await client.query("ROLLBACK");
      return new Response("Error deleting associated data", { status: 500 });
    }

    // 刪除訂單
    try {
      const deleteOrderQuery = `
        DELETE FROM member_order WHERE webstore_order_id = $1
      `;
      await client.query(deleteOrderQuery, [shopifyOrderId]);
      console.log(`Order deleted: ${shopifyOrderId}`);
    } catch (err) {
      console.error("Error deleting order:", err);
      await client.query("ROLLBACK");
      return new Response("Error deleting order", { status: 500 });
    }

    await client.query("COMMIT");
    return new Response("Order deleted successfully", { status: 200 });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error processing order_cancelled webhook:", error);
    return new Response("Internal server error", { status: 500 });
  } finally {
    client.release(); // 釋放連接
  }
};
