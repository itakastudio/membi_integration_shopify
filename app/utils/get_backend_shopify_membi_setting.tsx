// app/utils/get_backend_shopify_membi_setting.tsx



interface ShopifyMembiSettingResponse {
  tenant_host: string;
  fn_w_order_to_membi: boolean;
  fn_w_discount_to_membi: boolean;
  fn_discount_to_shopify: boolean;
}


export async function getBackendShopifyMembiSetting(shop: string): Promise<ShopifyMembiSettingResponse> {
  console.log("getBackendShopifyMembiSetting function begin");

  const backendUrl = process.env.BACKEND_URL;
  console.log(`backendUrl: `, backendUrl);

  try {
    console.log("backendUrl", backendUrl);
    const response = await fetch(`${backendUrl}/tenant/tenant_shopify_info/get_shopify_membi_setting?shop=${shop}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      console.error('Failed to fetch settings:', response.statusText);
      throw new Error('Failed to fetch settings');
    }

    const data: ShopifyMembiSettingResponse = await response.json();
    console.log('Successfully fetched settings:', data);

    return data

  } catch (error) {
    console.error("Error in getBackendShopifyMembiSetting function:", error);
    throw error;
  }
}