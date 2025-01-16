import pool from "app/pg.server";
import { authenticate } from "../shopify.server";

export const action = async ({ request }: any) => {
  console.log(`Received order_edited webhook`);

  const { shop, topic } = await authenticate.webhook(request);
  console.log(`Received order_edited webhook for ${shop}`);
  console.log(`Received ${topic} webhook for ${shop}`);

  try {
    const orderData = await request.json(); // 獲取請求內容

    const shopifyOrderId = orderData.id;

    // 確認是否有履行記錄
    if (orderData.fulfillments && orderData.fulfillments.length > 0) {
      const fulfillmentData = orderData.fulfillments[0]; // 取第一筆履行記錄
      const orderFulfilledDate = fulfillmentData.created_at || null;

      console.log('Received fulfillment data:', fulfillmentData);

      // 檢查訂單是否已經存在
      const orderExists = await pool.query(`
        SELECT * FROM member_order WHERE webstore_order_id = $1
      `, [shopifyOrderId]);

      if (orderExists.rowCount === 0) {
        console.log(`Order ${shopifyOrderId} does not exist. Skipping fulfillment.`);
        return new Response('Order does not exist', { status: 404 });
      }

      // 更新訂單履行日期
      if (orderFulfilledDate) {
        await pool.query(`
          UPDATE member_order
          SET order_fulfilled_date = $1
          WHERE webstore_order_id = $2
        `, [orderFulfilledDate, shopifyOrderId]);

        console.log('Order fulfillment date updated:', orderFulfilledDate);
      } else {
        console.log('No fulfillment date provided.');
      }

      // 如果有折扣碼，插入折扣碼的詳細資料
      const discountCodes = orderData.discount_codes || [];
      for (const discount of discountCodes) {
        await pool.query(`
          INSERT INTO order_discounts (order_id, discount_code, discount_type, discount_amount)
          VALUES ((SELECT order_id FROM member_order WHERE webstore_order_id = $1), $2, $3, $4)
        `, [shopifyOrderId, discount.code, discount.type || 'UNKNOWN', discount.amount || 0]);
      }

      console.log('Order fulfillment updated:', shopifyOrderId);
      return new Response('Order fulfillment updated successfully', { status: 200 });
    } else {
      console.log('No fulfillments found for this order.');
      return new Response('No fulfillment data found', { status: 200 });
    }
  } catch (error) {
    console.error('Error updating order fulfillment in database:', error);
    return new Response('Internal server error', { status: 500 });
  }
};
