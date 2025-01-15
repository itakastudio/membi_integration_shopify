
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  shop: 'shop',
  state: 'state',
  isOnline: 'isOnline',
  scope: 'scope',
  expires: 'expires',
  accessToken: 'accessToken',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Admin_loginScalarFieldEnum = {
  login_id: 'login_id',
  admin_name: 'admin_name',
  admin_password_hash: 'admin_password_hash',
  last_login: 'last_login',
  admin_role_id: 'admin_role_id',
  failed_login_attempts: 'failed_login_attempts',
  created_at: 'created_at',
  admin_id: 'admin_id'
};

exports.Prisma.Admin_roleScalarFieldEnum = {
  admin_role_id: 'admin_role_id',
  admin_role_access: 'admin_role_access'
};

exports.Prisma.Admin_settingScalarFieldEnum = {
  admin_setting_id: 'admin_setting_id',
  membership_extend_method: 'membership_extend_method',
  membership_end_result: 'membership_end_result',
  membership_period: 'membership_period',
  wati_end_point: 'wati_end_point',
  wati_access_token: 'wati_access_token'
};

exports.Prisma.BroadcastScalarFieldEnum = {
  broadcast_id: 'broadcast_id',
  broadcast_name: 'broadcast_name',
  create_at: 'create_at',
  create_by: 'create_by',
  discount_code: 'discount_code',
  wati_template: 'wati_template',
  wati_account: 'wati_account',
  wati_number: 'wati_number',
  broadcast_now: 'broadcast_now',
  scheduled_start: 'scheduled_start',
  broadcast_status: 'broadcast_status'
};

exports.Prisma.Broadcast_historyScalarFieldEnum = {
  broadcast_history_id: 'broadcast_history_id',
  broadcast_id: 'broadcast_id',
  member_id: 'member_id',
  sent_at: 'sent_at',
  broadcast_history_status: 'broadcast_history_status',
  updated_at: 'updated_at'
};

exports.Prisma.Discount_codeScalarFieldEnum = {
  discount_code_id: 'discount_code_id',
  webstore_id: 'webstore_id',
  webstore_discount_code_id: 'webstore_discount_code_id',
  discount_code_name: 'discount_code_name',
  discount_code: 'discount_code',
  discount_type: 'discount_type',
  discount_amount: 'discount_amount',
  minimum_spending: 'minimum_spending',
  fixed_discount_cap: 'fixed_discount_cap',
  use_limit_type: 'use_limit_type',
  valid_from: 'valid_from',
  valid_until: 'valid_until',
  created_at: 'created_at',
  updated_at: 'updated_at',
  discount_code_status: 'discount_code_status',
  deleted_status: 'deleted_status',
  discount_code_content: 'discount_code_content',
  discount_code_term: 'discount_code_term'
};

exports.Prisma.MemberScalarFieldEnum = {
  member_id: 'member_id',
  created_at: 'created_at',
  created_by: 'created_by',
  updated_at: 'updated_at',
  updated_by: 'updated_by',
  member_phone: 'member_phone',
  member_name: 'member_name',
  member_referral_code: 'member_referral_code',
  point: 'point',
  membership_expiry_date: 'membership_expiry_date',
  referrer_member_id: 'referrer_member_id',
  birthday: 'birthday',
  member_note: 'member_note',
  member_tag: 'member_tag',
  state_code: 'state_code',
  membership_tier_id: 'membership_tier_id',
  points_balance: 'points_balance',
  membership_status: 'membership_status',
  is_active: 'is_active',
  membership_start_date: 'membership_start_date',
  total_order_amount: 'total_order_amount',
  total_point_earn: 'total_point_earn',
  membership_period_point_earn: 'membership_period_point_earn'
};

exports.Prisma.Member_loginScalarFieldEnum = {
  login_id: 'login_id',
  member_id: 'member_id',
  member_phone: 'member_phone',
  member_password_hash: 'member_password_hash',
  last_login: 'last_login',
  failed_login_attempts: 'failed_login_attempts'
};

exports.Prisma.Member_orderScalarFieldEnum = {
  order_id: 'order_id',
  webstore_order_id: 'webstore_order_id',
  customer_name: 'customer_name',
  total_price: 'total_price',
  webstore_order_number: 'webstore_order_number',
  order_created_date: 'order_created_date',
  order_fulfilled_date: 'order_fulfilled_date',
  delivery_date: 'delivery_date',
  customer_email: 'customer_email',
  customer_phone: 'customer_phone',
  customer_address: 'customer_address'
};

exports.Prisma.Member_point_ruleScalarFieldEnum = {
  member_point_rule_id: 'member_point_rule_id',
  rule_name: 'rule_name',
  rule_type: 'rule_type',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Membership_tierScalarFieldEnum = {
  membership_tier_id: 'membership_tier_id',
  membership_tier_name: 'membership_tier_name',
  membership_tier_sequence: 'membership_tier_sequence',
  require_point: 'require_point',
  extend_membership_point: 'extend_membership_point',
  point_multiplier: 'point_multiplier',
  membership_period: 'membership_period',
  original_point: 'original_point',
  multiplied_point: 'multiplied_point'
};

exports.Prisma.Order_discountsScalarFieldEnum = {
  order_discount_id: 'order_discount_id',
  order_id: 'order_id',
  discount_type: 'discount_type',
  discount_code: 'discount_code',
  discount_description: 'discount_description',
  discount_amount: 'discount_amount',
  discount_value_type: 'discount_value_type',
  discount_value: 'discount_value',
  is_shipping_discount: 'is_shipping_discount'
};

exports.Prisma.Order_line_item_discountsScalarFieldEnum = {
  line_item_discount_id: 'line_item_discount_id',
  order_line_item_id: 'order_line_item_id',
  discount_type: 'discount_type',
  discount_code: 'discount_code',
  discount_description: 'discount_description',
  discount_amount: 'discount_amount',
  discount_value_type: 'discount_value_type',
  discount_value: 'discount_value'
};

exports.Prisma.Order_line_itemsScalarFieldEnum = {
  line_item_id: 'line_item_id',
  order_id: 'order_id',
  webstore_line_item_id: 'webstore_line_item_id',
  product_id: 'product_id',
  variant_id: 'variant_id',
  sku: 'sku',
  item_name: 'item_name',
  item_qty: 'item_qty',
  item_unit_price: 'item_unit_price',
  item_subtotal_price: 'item_subtotal_price',
  item_total_discount: 'item_total_discount',
  item_total_price: 'item_total_price'
};

exports.Prisma.Point_earning_recordScalarFieldEnum = {
  point_earning_id: 'point_earning_id',
  point_earning_date: 'point_earning_date',
  rule_type: 'rule_type',
  point_earning: 'point_earning',
  order_id: 'order_id',
  referral_code: 'referral_code',
  member_id: 'member_id',
  order_phone: 'order_phone'
};

exports.Prisma.Purchase_amount_rule_settingScalarFieldEnum = {
  purchase_amount_rule_setting_id: 'purchase_amount_rule_setting_id',
  member_point_rule_id: 'member_point_rule_id',
  purchase_amount: 'purchase_amount',
  point_awarded: 'point_awarded'
};

exports.Prisma.Purchase_count_rule_settingScalarFieldEnum = {
  purchase_count_rule_setting_id: 'purchase_count_rule_setting_id',
  member_point_rule_id: 'member_point_rule_id',
  purchase_count: 'purchase_count',
  point_awarded: 'point_awarded'
};

exports.Prisma.Redemption_itemScalarFieldEnum = {
  redemption_item_id: 'redemption_item_id',
  redemption_item_name: 'redemption_item_name',
  redemption_type: 'redemption_type',
  discount_amount: 'discount_amount',
  quantity_available: 'quantity_available',
  minimum_spending: 'minimum_spending',
  fixed_discount_cap: 'fixed_discount_cap',
  validity_period: 'validity_period',
  valid_from: 'valid_from',
  valid_until: 'valid_until',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_status: 'deleted_status',
  redeem_point: 'redeem_point',
  redemption_item_status: 'redemption_item_status',
  redemption_content: 'redemption_content',
  redemption_term: 'redemption_term'
};

exports.Prisma.Redemption_recordScalarFieldEnum = {
  redemption_record_id: 'redemption_record_id',
  member_id: 'member_id',
  redemption_item_id: 'redemption_item_id',
  received_date: 'received_date',
  redeem_point: 'redeem_point',
  redeem_code: 'redeem_code',
  webstore_redeem_code_id: 'webstore_redeem_code_id',
  end_date: 'end_date'
};

exports.Prisma.Referral_rule_settingScalarFieldEnum = {
  referral_rule_setting_id: 'referral_rule_setting_id',
  member_point_rule_id: 'member_point_rule_id',
  points_per_referral: 'points_per_referral'
};

exports.Prisma.Shop_tokensScalarFieldEnum = {
  shop: 'shop',
  access_token: 'access_token'
};

exports.Prisma.Wati_templateScalarFieldEnum = {
  wati_template_id: 'wati_template_id',
  template_uuid: 'template_uuid',
  element_name: 'element_name',
  category: 'category',
  wati_template_status: 'wati_template_status',
  last_modified: 'last_modified',
  template_type: 'template_type',
  body: 'body',
  body_original: 'body_original',
  footer: 'footer',
  button_type: 'button_type',
  header_present: 'header_present',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Wati_template_paramScalarFieldEnum = {
  wati_template_params_id: 'wati_template_params_id',
  wati_template_id: 'wati_template_id',
  param_name: 'param_name',
  param_value: 'param_value',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.broadcast_status_enum = exports.$Enums.broadcast_status_enum = {
  pending: 'pending',
  sent: 'sent',
  all_done: 'all_done'
};

exports.broadcast_history_status_enum = exports.$Enums.broadcast_history_status_enum = {
  pending: 'pending',
  sent: 'sent',
  edited: 'edited',
  cancelled: 'cancelled',
  failed: 'failed'
};

exports.discount_type_enum = exports.$Enums.discount_type_enum = {
  fixed_amount: 'fixed_amount',
  percentage: 'percentage'
};

exports.use_limit_enum = exports.$Enums.use_limit_enum = {
  single_use: 'single_use',
  once_per_customer: 'once_per_customer',
  unlimited: 'unlimited'
};

exports.discount_code_status_enum = exports.$Enums.discount_code_status_enum = {
  expired: 'expired',
  active: 'active',
  suspended: 'suspended',
  scheduled: 'scheduled'
};

exports.membership_status_enum = exports.$Enums.membership_status_enum = {
  expired: 'expired',
  active: 'active',
  suspended: 'suspended'
};

exports.redemption_type_enum = exports.$Enums.redemption_type_enum = {
  fixed_amount: 'fixed_amount',
  percentage: 'percentage'
};

exports.redemption_item_status_enum = exports.$Enums.redemption_item_status_enum = {
  expired: 'expired',
  active: 'active',
  suspended: 'suspended',
  scheduled: 'scheduled'
};

exports.Prisma.ModelName = {
  Session: 'Session',
  admin_login: 'admin_login',
  admin_role: 'admin_role',
  admin_setting: 'admin_setting',
  broadcast: 'broadcast',
  broadcast_history: 'broadcast_history',
  discount_code: 'discount_code',
  member: 'member',
  member_login: 'member_login',
  member_order: 'member_order',
  member_point_rule: 'member_point_rule',
  membership_tier: 'membership_tier',
  order_discounts: 'order_discounts',
  order_line_item_discounts: 'order_line_item_discounts',
  order_line_items: 'order_line_items',
  point_earning_record: 'point_earning_record',
  purchase_amount_rule_setting: 'purchase_amount_rule_setting',
  purchase_count_rule_setting: 'purchase_count_rule_setting',
  redemption_item: 'redemption_item',
  redemption_record: 'redemption_record',
  referral_rule_setting: 'referral_rule_setting',
  shop_tokens: 'shop_tokens',
  wati_template: 'wati_template',
  wati_template_param: 'wati_template_param'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
