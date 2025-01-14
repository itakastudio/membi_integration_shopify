// app/routes/webhooks.app.order_created.tsx

import { authenticate } from "../shopify.server";
import { Pool,QueryResult } from "pg";
// 建立 PostgreSQL 連線池
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT || "5432", 10),
  ssl: {
    rejectUnauthorized: false, // 根據需要配置
  },
});

export const action = async ({ request }: any) => {
  console.log(`Received order_created webhook`);

  try {
    // 驗證 Shopify webhook
    const { shop, topic } = await authenticate.webhook(request);
    const orderData = await request.json();
    console.log(`Processing order data:`, orderData);

    if (!orderData) {
      console.error("Order data is missing");
      return new Response("Order data is missing", { status: 400 });
    }

    const shopifyOrderId = orderData.id;
    const shopifyOrderNumber = orderData.order_number;
    const orderCreatedDate = orderData.created_at;
    const orderFulfilledDate = orderData.fulfilled_at || null;
    const deliveryDate = orderData.delivery_date || null;
    const totalPrice = orderData.total_price;

    // 處理顧客資訊
    const customer = orderData.customer || {};
    const customerName = customer.first_name || customer.last_name
      ? `${customer.first_name || ""} ${customer.last_name || ""}`.trim()
      : "Guest";
    const email = customer.email || "No Email";
    const phone = customer.phone || "No Phone";
    const address = orderData.billing_address
      ? `${orderData.billing_address.address1 || ""}, ${orderData.billing_address.city || ""}, ${orderData.billing_address.zip || ""}, ${orderData.billing_address.province || ""}, ${orderData.billing_address.country || ""}`.trim()
      : "No Address";

    console.log(`Processing order for customer: ${customerName}, Email: ${email}`);

    // 3. 儲存到資料庫
    const client = await pool.connect();
    await client.query("BEGIN");

    // 檢查訂單是否已經存在
    const orderExists = (await client.query(
      "SELECT * FROM member_order WHERE webstore_order_id = $1",
      [shopifyOrderId]
    )) as QueryResult<any>;
    
    // 確保 rowCount 存在
    if ((orderExists.rowCount ?? 0) > 0) { 
      console.log(`Order ${shopifyOrderId} already exists. Skipping insert.`);
      await client.query("ROLLBACK");
      return new Response("Order already exists", { status: 200 });
    }
    
    // 插入訂單資料
    const orderQuery = `
      INSERT INTO member_order
      (webstore_order_id, webstore_order_number, order_created_date, order_fulfilled_date, delivery_date, customer_name, customer_email, customer_phone, customer_address, total_price)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `;
    const orderValues = [
      shopifyOrderId,
      shopifyOrderNumber,
      orderCreatedDate,
      orderFulfilledDate,
      deliveryDate,
      customerName,
      email,
      phone,
      address,
      totalPrice,
    ];
    await client.query(orderQuery, orderValues);

    // 插入商品資訊
    const items = orderData.line_items || [];
    for (const item of items) {
      const productId = item.product_id || null;
      const variantId = item.variant_id || null;
      const itemSubtotalPrice = parseFloat(item.price) * parseInt(item.quantity);
      const itemTotalDiscount = item.discount_allocations?.reduce(
        (acc: number, discount: { amount: string }) => acc + parseFloat(discount.amount),
        0
      ) || 0;
      

      const itemQuery = `
        INSERT INTO order_line_items
        (order_id, webstore_line_item_id, sku, item_name, item_qty, item_unit_price, item_subtotal_price, item_total_discount, product_id, variant_id, item_total_price)
        VALUES (
          (SELECT order_id FROM member_order WHERE webstore_order_id = $1 LIMIT 1),
          $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
        )
      `;
      const itemValues = [
        shopifyOrderId,
        item.id,
        item.sku,
        item.name,
        parseInt(item.quantity),
        parseFloat(item.price),
        itemSubtotalPrice,
        itemTotalDiscount,
        productId,
        variantId,
        itemSubtotalPrice - itemTotalDiscount,
      ];
      await client.query(itemQuery, itemValues);
    }

    // 插入折扣碼
    const orderLevelDiscounts = orderData.discount_codes || [];
    for (const discount of orderLevelDiscounts) {
      const discountQuery = `
        INSERT INTO order_discounts
        (order_id, discount_code, discount_type, discount_amount)
        VALUES (
          (SELECT order_id FROM member_order WHERE webstore_order_id = $1 LIMIT 1),
          $2, $3, $4
        )
      `;
      const discountValues = [
        shopifyOrderId,
        discount.code || "No Code",
        discount.type || "UNKNOWN",
        parseFloat(discount.amount) || 0,
      ];
      await client.query(discountQuery, discountValues);
    }

    await client.query("COMMIT");
    console.log("Order processed and saved successfully:", shopifyOrderId);
    return new Response("Webhook processed successfully", { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};