// app/routes/webhooks.app.order_created.tsx
import pool from "app/pg.server";
import { authenticate } from "../shopify.server";

export const action = async ({ request }: any) => {
  console.log(`Received order_created webhook`);
  
  // 驗證 Webhook 請求
  const response = await authenticate.webhook(request);
  const orderData=response.payload;
  console.log('Received order_created webhook for ${orderData}')
  //console.log(`Received order_created webhook for ${shop}`);
  //console.log(`Received ${topic} webhook for ${shop}`);
  console.log(
    `Received order_fulfillment webhook for: ${JSON.stringify(orderData, null, 2)}`
  );
  const client = await pool.connect(); // 開始交易
  await client.query("SET search_path TO public;");
  try {
    //const orderData = await request.json(); // 獲取請求內容
    if (!orderData) {
      console.error('Order data is missing');
      return new Response('Order data is missing', { status: 400 });
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
      ? `${customer.first_name || ''} ${customer.last_name || ''}`.trim()
      : 'Guest';
    const email = customer.email || 'No Email';
    const phone = customer.phone || 'No Phone';
    const address = orderData.billing_address
      ? `${orderData.billing_address.address1 || ''}, ${orderData.billing_address.city || ''}, ${orderData.billing_address.zip || ''}, ${orderData.billing_address.province || ''}, ${orderData.billing_address.country || ''}`.trim()
      : 'No Address';

    console.log(`Processing order for customer: ${customerName}, Email: ${email}`);

    await client.query('BEGIN'); // 開始交易

    // 檢查訂單是否已經存在
    console.log(`Checking if order ${shopifyOrderId} exists...`);
    const orderExists = await client.query(`
      SELECT * FROM member_order WHERE webstore_order_id = $1
    `, [shopifyOrderId]);

    if (orderExists && orderExists.rowCount !== null && orderExists.rowCount > 0) {
      console.log(`Order ${shopifyOrderId} already exists. Skipping insert.`);
      await client.query('ROLLBACK'); // 回滾交易
      return new Response('Order already exists', { status: 200 });
    }

    console.log(`Order ${shopifyOrderId} does not exist. Proceeding with insert.`);

    // 插入訂單資料到資料庫
    const orderQuery = `
      INSERT INTO member_order 
      (webstore_order_id, webstore_order_number, order_created_date, order_fulfilled_date, delivery_date, customer_name, customer_email, customer_phone, customer_address, total_price)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `;
    const orderValues = [shopifyOrderId, shopifyOrderNumber, orderCreatedDate, orderFulfilledDate, deliveryDate, customerName, email, phone, address, totalPrice];
    await client.query(orderQuery, orderValues);

    // 插入商品訊息到資料庫，並記錄每個商品應用的折扣碼
    const items = orderData.line_items || [];
    for (const item of items) {
      const productId = item.product_id || null;
      const variantId = item.variant_id || null;
      const itemSubtotalPrice = parseFloat(item.price) * parseInt(item.quantity);
      const itemTotalDiscount = item.discount_allocations?.reduce((acc: number, discount: { amount: string }) => acc + parseFloat(discount.amount), 0) || 0;

      const itemQuery = `
        INSERT INTO order_line_items (order_id, webstore_line_item_id, sku, item_name, item_qty, item_unit_price, item_subtotal_price, item_total_discount, product_id, variant_id, item_total_price)
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
        itemSubtotalPrice - itemTotalDiscount
      ];
      await client.query(itemQuery, itemValues);

       // 插入與該商品相關的折扣碼
  const discountApplications = orderData.discount_applications || [];
  for (const discountApplication of discountApplications) {
    if (discountApplication.target_type === 'line_item') {
      const itemDiscountQuery = `
        INSERT INTO order_line_item_discounts (order_line_item_id, discount_type, discount_code, discount_description, discount_value_type, discount_amount, discount_value)
        VALUES (
          (SELECT line_item_id FROM order_line_items WHERE webstore_line_item_id = $1 LIMIT 1),
          $2, $3, $4, $5, $6, $7
        )
      `;
      const itemDiscountValues = [
        item.id,
        discountApplication.type || 'UNKNOWN', // 正確抓取 discount_type
        discountApplication.code || 'No Code',
        'No Description',
        discountApplication.value_type || 'UNKNOWN', // discount_value_type
        parseFloat(item.discount_allocations?.reduce(
          (acc: number, discount: { amount: string }) => acc + parseFloat(discount.amount), 0)) || 0, // discount_amount
        parseFloat(discountApplication.value) || 0 // discount_value
      ];
      await client.query(itemDiscountQuery, itemDiscountValues);
    }
  }

  type DiscountApplication = {
    code?: string; // 折扣碼
    value_type?: string; // 折扣值類型，例如 "percentage" 或 "fixed_amount"
    value?: string; // 折扣值
    target_type?: string; // 折扣目標類型，例如 "line_item" 或 "order"
  };

  // 插入訂單級別的折扣碼
  const orderLevelDiscounts = orderData.discount_codes || [];
const orderDiscountApplications = orderData.discount_applications || [];

for (const discount of orderLevelDiscounts) {
  // 顯式指定 app 的類型
  const discountApplication = orderDiscountApplications.find(
    (app: DiscountApplication) => app.code === discount.code
  );
  const discountAmount = parseFloat(discount.amount) || 0;
  const discountValueType = discountApplication?.value_type || 'UNKNOWN';
  const discountValue = parseFloat(discountApplication?.value || 0);

  const discountQuery = `
    INSERT INTO order_discounts (order_id, discount_code, discount_type, discount_amount, discount_description, discount_value_type, discount_value)
    VALUES (
      (SELECT order_id FROM member_order WHERE webstore_order_id = $1 LIMIT 1),
      $2, $3, $4, $5, $6, $7
    )
  `;
  const discountValues = [
    shopifyOrderId,
    discount.code || null,
    discount.type || 'UNKNOWN',
    discountAmount,
    'No Description',
    discountValueType,
    discountValue,
  ];
  await client.query(discountQuery, discountValues);
}



    }
    
    await client.query('COMMIT'); // 提交交易
    console.log('New order created with discounts:', orderData);
    return new Response('Webhook processed successfully', { status: 200 });
  } catch (error) {
    await client.query('ROLLBACK'); // 失敗時回滾交易
    console.error('Error inserting order into database:', error);
    return new Response('Internal server error', { status: 500 });
  } finally {
    client.release(); // 釋放連接
  }
};
