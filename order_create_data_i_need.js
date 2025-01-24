// order_create with fixed_amount discount, line_item discount, shipping fee


orderData:  {
  id: 6200360403244,
  admin_graphql_api_id: "gid://shopify/Order/6200360403244",
  cancel_reason: null,
  cancelled_at: null,
  cart_token: null,
  checkout_id: 38571940610348,
  checkout_token: "213b73cfcfb647ab742d1b784d0f8ee1",
  contact_email: "it@akastudio.com.hk",
  created_at: "2025-01-23T22:16:37-05:00",
  currency: "HKD",
  current_shipping_price_set: {
    shop_money: {
      amount: "20.00",
      currency_code: "HKD",
    },
    presentment_money: {
      amount: "20.00",
      currency_code: "HKD",
    },
  },
  current_subtotal_price: "284.00",
  current_subtotal_price_set: {
    shop_money: {
      amount: "284.00",
      currency_code: "HKD",
    },
    presentment_money: {
      amount: "284.00",
      currency_code: "HKD",
    },
  },
  current_total_additional_fees_set: null,
  current_total_discounts: "15.00",
  current_total_discounts_set: {
    shop_money: {
      amount: "15.00",
      currency_code: "HKD",
    },
    presentment_money: {
      amount: "15.00",
      currency_code: "HKD",
    },
  },
  current_total_duties_set: null,
  current_total_price: "304.00",
  current_total_price_set: {
    shop_money: {
      amount: "304.00",
      currency_code: "HKD",
    },
    presentment_money: {
      amount: "304.00",
      currency_code: "HKD",
    },
  },
  current_total_tax: "0.00",
  current_total_tax_set: {
    shop_money: {
      amount: "0.00",
      currency_code: "HKD",
    },
    presentment_money: {
      amount: "0.00",
      currency_code: "HKD",
    },
  },
  customer_locale: "en",
  device_id: null,
  discount_codes: [
    {
      code: "0124C",
      amount: "10.00",
      type: "fixed_amount",
    }
  ],
  email: "it@akastudio.com.hk",
  financial_status: "paid",
  fulfillment_status: null,
  order_number: 1070,
  original_total_additional_fees_set: null,
  payment_gateway_names: [ "manual" ],
  phone: null,
  po_number: null,
  presentment_currency: "HKD",
  processed_at: "2025-01-23T22:16:37-05:00",
  reference: null,
  referring_site: null,
  source_identifier: null,
  source_name: "shopify_draft_order",
  source_url: null,
  subtotal_price: "284.00",
  subtotal_price_set: {
    shop_money: {
      amount: "284.00",
      currency_code: "HKD",
    },
    presentment_money: {
      amount: "284.00",
      currency_code: "HKD",
    },
  },
  total_discounts: "15.00",
  total_discounts_set: {
    shop_money: {
      amount: "15.00",
      currency_code: "HKD",
    },
    presentment_money: {
      amount: "15.00",
      currency_code: "HKD",
    },
  },
  total_line_items_price: "299.00",
  total_line_items_price_set: {
    shop_money: {
      amount: "299.00",
      currency_code: "HKD",
    },
    presentment_money: {
      amount: "299.00",
      currency_code: "HKD",
    },
  },
  total_outstanding: "0.00",
  total_price: "304.00",
  total_price_set: {
    shop_money: {
      amount: "304.00",
      currency_code: "HKD",
    },
    presentment_money: {
      amount: "304.00",
      currency_code: "HKD",
    },
  },
  total_shipping_price_set: {
    shop_money: {
      amount: "20.00",
      currency_code: "HKD",
    },
    presentment_money: {
      amount: "20.00",
      currency_code: "HKD",
    },
  },
  updated_at: "2025-01-23T22:16:38-05:00",
  user_id: 116651032876,
  billing_address: {
    first_name: "Alan",
    address1: "",
    phone: "+85291451002",
    city: "",
    zip: null,
    province: null,
    country: "Hong Kong",
    last_name: "",
    address2: null,
    company: null,
    latitude: null,
    longitude: null,
    name: "Alan",
    country_code: "HK",
    province_code: null,
  },
  customer: {
    id: 8658316394796,
    email: "it@akastudio.com.hk",
    created_at: "2025-01-13T01:27:40-05:00",
    updated_at: "2025-01-23T22:16:37-05:00",
    first_name: "Alan",
    last_name: "",
    state: "disabled",
    note: null,
    verified_email: true,
    multipass_identifier: null,
    tax_exempt: false,
    phone: null,
    email_marketing_consent: {
      state: "not_subscribed",
      opt_in_level: "single_opt_in",
      consent_updated_at: null,
    },
    sms_marketing_consent: null,
    tags: "",
    currency: "HKD",
    tax_exemptions: [],
    admin_graphql_api_id: "gid://shopify/Customer/8658316394796",
    default_address: {
      id: 10582771663148,
      customer_id: 8658316394796,
      first_name: "Alan",
      last_name: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      province: "",
      country: "Hong Kong",
      zip: "",
      phone: "+85291451002",
      name: "Alan",
      province_code: null,
      country_code: "HK",
      country_name: "Hong Kong",
      default: true,
    },
  },
  discount_applications: [
    {
      target_type: "line_item",
      type: "manual",
      value: "10.0",
      value_type: "fixed_amount",
      allocation_method: "across",
      target_selection: "all",
      title: "0124C",
      description: "0124C",
    }, {
      target_type: "line_item",
      type: "automatic",
      value: "5.0",
      value_type: "fixed_amount",
      allocation_method: "across",
      target_selection: "entitled",
      title: "測試discount_type-1",
    }
  ],
  fulfillments: [],
  line_items: [
    {
      id: 15518818468140,
      admin_graphql_api_id: "gid://shopify/LineItem/15518818468140",
      attributed_staffs: [],
      current_quantity: 1,
      fulfillable_quantity: 1,
      fulfillment_service: "manual",
      fulfillment_status: null,
      gift_card: false,
      grams: 0,
      name: "aaa0103測試商品11aa",
      price: "99.00",
      price_set: {
        shop_money: {
          amount: "99.00",
          currency_code: "HKD",
        },
        presentment_money: {
          amount: "99.00",
          currency_code: "HKD",
        },
      },
      product_exists: true,
      product_id: 9782123692332,
      properties: [],
      quantity: 1,
      requires_shipping: true,
      sku: "",
      taxable: true,
      title: "aaa0103測試商品11aa",
      total_discount: "0.00",
      total_discount_set: {
        shop_money: {
          amount: "0.00",
          currency_code: "HKD",
        },
        presentment_money: {
          amount: "0.00",
          currency_code: "HKD",
        },
      },
      variant_id: 50398373085484,
      variant_inventory_management: "shopify",
      variant_title: null,
      vendor: "webhook-manager-app",
      tax_lines: [],
      duties: [],
      discount_allocations: [
        {
          amount: "3.20",
          amount_set: {
            shop_money: {
              amount: "3.20",
              currency_code: "HKD",
            },
            presentment_money: {
              amount: "3.20",
              currency_code: "HKD",
            },
          },
          discount_application_index: 0,
        }, {
          amount: "5.00",
          amount_set: {
            shop_money: {
              amount: "5.00",
              currency_code: "HKD",
            },
            presentment_money: {
              amount: "5.00",
              currency_code: "HKD",
            },
          },
          discount_application_index: 1,
        }
      ],
    }, {
      id: 15518818500908,
      admin_graphql_api_id: "gid://shopify/LineItem/15518818500908",
      attributed_staffs: [],
      current_quantity: 1,
      fulfillable_quantity: 1,
      fulfillment_service: "manual",
      fulfillment_status: null,
      gift_card: false,
      grams: 0,
      name: "Green Snowboard",
      price: "100.00",
      price_set: {
        shop_money: {
          amount: "100.00",
          currency_code: "HKD",
        },
        presentment_money: {
          amount: "100.00",
          currency_code: "HKD",
        },
      },
      product_exists: true,
      product_id: 9797441945900,
      properties: [],
      quantity: 1,
      requires_shipping: true,
      sku: "",
      taxable: true,
      title: "Green Snowboard",
      total_discount: "0.00",
      total_discount_set: {
        shop_money: {
          amount: "0.00",
          currency_code: "HKD",
        },
        presentment_money: {
          amount: "0.00",
          currency_code: "HKD",
        },
      },
      variant_id: 50451770802476,
      variant_inventory_management: null,
      variant_title: null,
      vendor: "webhook-manager-app",
      tax_lines: [],
      duties: [],
      discount_allocations: [
        {
          amount: "3.40",
          amount_set: {
            shop_money: {
              amount: "3.40",
              currency_code: "HKD",
            },
            presentment_money: {
              amount: "3.40",
              currency_code: "HKD",
            },
          },
          discount_application_index: 0,
        }
      ],
    }, {
      id: 15518818533676,
      admin_graphql_api_id: "gid://shopify/LineItem/15518818533676",
      attributed_staffs: [],
      current_quantity: 1,
      fulfillable_quantity: 1,
      fulfillment_service: "manual",
      fulfillment_status: null,
      gift_card: false,
      grams: 0,
      name: "Green Snowboard",
      price: "100.00",
      price_set: {
        shop_money: {
          amount: "100.00",
          currency_code: "HKD",
        },
        presentment_money: {
          amount: "100.00",
          currency_code: "HKD",
        },
      },
      product_exists: true,
      product_id: 9799208534316,
      properties: [],
      quantity: 1,
      requires_shipping: true,
      sku: "",
      taxable: true,
      title: "Green Snowboard",
      total_discount: "0.00",
      total_discount_set: {
        shop_money: {
          amount: "0.00",
          currency_code: "HKD",
        },
        presentment_money: {
          amount: "0.00",
          currency_code: "HKD",
        },
      },
      variant_id: 50460159541548,
      variant_inventory_management: null,
      variant_title: null,
      vendor: "webhook-manager-app",
      tax_lines: [],
      duties: [],
      discount_allocations: [
        {
          amount: "3.40",
          amount_set: {
            shop_money: {
              amount: "3.40",
              currency_code: "HKD",
            },
            presentment_money: {
              amount: "3.40",
              currency_code: "HKD",
            },
          },
          discount_application_index: 0,
        }
      ],
    }
  ],
  payment_terms: null,
  refunds: [],
  shipping_address: {
    first_name: "Alan",
    address1: "",
    phone: "+85291451002",
    city: "",
    zip: null,
    province: null,
    country: "Hong Kong",
    last_name: "",
    address2: null,
    company: null,
    latitude: null,
    longitude: null,
    name: "Alan",
    country_code: "HK",
    province_code: null,
  },
  shipping_lines: [
    {
      id: 4946444648748,
      carrier_identifier: null,
      code: "custom",
      current_discounted_price_set: {
        shop_money: {
          amount: "20.00",
          currency_code: "HKD",
        },
        presentment_money: {
          amount: "20.00",
          currency_code: "HKD",
        },
      },
      discounted_price: "20.00",
      discounted_price_set: {
        shop_money: {
          amount: "20.00",
          currency_code: "HKD",
        },
        presentment_money: {
          amount: "20.00",
          currency_code: "HKD",
        },
      },
      is_removed: false,
      phone: null,
      price: "20.00",
      price_set: {
        shop_money: {
          amount: "20.00",
          currency_code: "HKD",
        },
        presentment_money: {
          amount: "20.00",
          currency_code: "HKD",
        },
      },
      requested_fulfillment_service_id: null,
      source: "shopify",
      title: "trans",
      tax_lines: [],
      discount_allocations: [],
    }
  ],
  returns: [],
}