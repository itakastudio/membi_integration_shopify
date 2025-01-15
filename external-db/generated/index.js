
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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




  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\cathy\\Downloads\\membi_integration_shopify\\external-db\\generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\cathy\\Downloads\\membi_integration_shopify\\external-db\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Session {\n  id          String    @id\n  shop        String\n  state       String\n  isOnline    Boolean\n  scope       String\n  expires     DateTime?\n  accessToken String\n  createdAt   DateTime  @default(now())\n  updatedAt   DateTime\n}\n\nmodel admin_login {\n  login_id              Int         @id @default(autoincrement())\n  admin_name            String      @unique(map: \"admin_login_admin_phone_key\")\n  admin_password_hash   String\n  last_login            DateTime?   @db.Timestamptz(6)\n  admin_role_id         Int?\n  failed_login_attempts Int?        @default(0)\n  created_at            DateTime?   @default(now()) @db.Timestamptz(6)\n  admin_id              Int?        @default(dbgenerated(\"login_id\"))\n  admin_role            admin_role? @relation(fields: [admin_role_id], references: [admin_role_id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel admin_role {\n  admin_role_id     Int           @id @default(autoincrement())\n  admin_role_access String        @unique\n  admin_login       admin_login[]\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel admin_setting {\n  admin_setting_id         Int     @id @default(autoincrement())\n  membership_extend_method Int\n  membership_end_result    Int\n  membership_period        Int     @default(12)\n  wati_end_point           String?\n  wati_access_token        String?\n}\n\nmodel broadcast {\n  broadcast_id      Int                   @id @default(autoincrement())\n  broadcast_name    String\n  create_at         DateTime?             @default(now()) @db.Timestamptz(6)\n  create_by         String?\n  discount_code     String?\n  wati_template     String?\n  wati_account      String?\n  wati_number       String?\n  broadcast_now     Boolean?              @default(false)\n  scheduled_start   DateTime?             @db.Timestamptz(6)\n  broadcast_status  broadcast_status_enum @default(pending)\n  broadcast_history broadcast_history[]\n}\n\nmodel broadcast_history {\n  broadcast_history_id     Int                            @id @default(autoincrement())\n  broadcast_id             Int?\n  member_id                Int?\n  sent_at                  DateTime?                      @db.Timestamptz(6)\n  broadcast_history_status broadcast_history_status_enum?\n  updated_at               DateTime?                      @default(now()) @db.Timestamp(6)\n  broadcast                broadcast?                     @relation(fields: [broadcast_id], references: [broadcast_id], onDelete: Cascade, onUpdate: NoAction)\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel discount_code {\n  discount_code_id          Int                        @id @default(autoincrement())\n  webstore_id               Int?\n  webstore_discount_code_id String?                    @db.VarChar(255)\n  discount_code_name        String?                    @db.VarChar(255)\n  discount_code             String                     @unique @db.VarChar(255)\n  discount_type             discount_type_enum?\n  discount_amount           Decimal?                   @db.Decimal(10, 2)\n  minimum_spending          Decimal?                   @db.Decimal(10, 2)\n  fixed_discount_cap        Decimal?                   @db.Decimal(10, 2)\n  use_limit_type            use_limit_enum?\n  valid_from                DateTime?                  @db.Timestamp(6)\n  valid_until               DateTime?                  @db.Timestamp(6)\n  created_at                DateTime?                  @default(now()) @db.Timestamp(6)\n  updated_at                DateTime?                  @default(now()) @db.Timestamp(6)\n  discount_code_status      discount_code_status_enum?\n  deleted_status            Boolean                    @default(false)\n  discount_code_content     String?\n  discount_code_term        String?\n}\n\nmodel member {\n  member_id                    Int                     @id @default(autoincrement())\n  created_at                   DateTime?               @default(now()) @db.Timestamptz(6)\n  created_by                   Int?\n  updated_at                   DateTime?               @default(now()) @db.Timestamptz(6)\n  updated_by                   Int?\n  member_phone                 String?                 @unique @db.VarChar(50)\n  member_name                  String?\n  member_referral_code         String?\n  point                        Int?\n  membership_expiry_date       DateTime?               @db.Date\n  referrer_member_id           Int?\n  birthday                     DateTime?               @db.Date\n  member_note                  String?\n  member_tag                   String[]\n  state_code                   Int?\n  membership_tier_id           Int?\n  points_balance               Int?                    @default(0)\n  membership_status            membership_status_enum?\n  is_active                    Int?\n  membership_start_date        DateTime?               @db.Date\n  total_order_amount           Decimal?                @default(0) @db.Decimal\n  total_point_earn             Int?                    @default(0)\n  membership_period_point_earn Int?                    @default(0)\n  membership_tier              membership_tier?        @relation(fields: [membership_tier_id], references: [membership_tier_id])\n  member_login                 member_login[]\n  point_earning_record         point_earning_record[]\n  redemption_record            redemption_record[]\n}\n\nmodel member_login {\n  login_id              Int       @id @default(autoincrement())\n  member_id             Int\n  member_phone          String    @unique\n  member_password_hash  String\n  last_login            DateTime? @db.Timestamptz(6)\n  failed_login_attempts Int?      @default(0)\n  member                member    @relation(fields: [member_id], references: [member_id], onDelete: Cascade, onUpdate: NoAction)\n}\n\nmodel member_order {\n  order_id              Int                    @id(map: \"orders_pkey\") @default(autoincrement())\n  webstore_order_id     String?                @db.VarChar(255)\n  customer_name         String?                @db.VarChar(255)\n  total_price           Decimal?               @db.Decimal\n  webstore_order_number String?                @db.VarChar(255)\n  order_created_date    DateTime?              @db.Timestamp(6)\n  order_fulfilled_date  DateTime?              @db.Timestamp(6)\n  delivery_date         DateTime?              @db.Timestamp(6)\n  customer_email        String?                @db.VarChar(255)\n  customer_phone        String?                @db.VarChar(50)\n  customer_address      String?\n  order_discounts       order_discounts[]\n  order_line_items      order_line_items[]\n  point_earning_record  point_earning_record[]\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel member_point_rule {\n  member_point_rule_id         Int                           @id @default(autoincrement())\n  rule_name                    String                        @unique @db.VarChar(255)\n  rule_type                    String                        @unique(map: \"unique_rule_type\") @db.VarChar(255)\n  is_active                    Boolean?                      @default(false)\n  created_at                   DateTime?                     @default(now()) @db.Timestamptz(6)\n  updated_at                   DateTime?                     @default(now()) @db.Timestamptz(6)\n  purchase_amount_rule_setting purchase_amount_rule_setting?\n  purchase_count_rule_setting  purchase_count_rule_setting?\n  referral_rule_setting        referral_rule_setting?\n}\n\nmodel membership_tier {\n  membership_tier_id       Int      @id @default(autoincrement())\n  membership_tier_name     String   @db.VarChar(255)\n  membership_tier_sequence Int      @unique(map: \"unique_membership_tier_sequence\")\n  require_point            Int\n  extend_membership_point  Int\n  point_multiplier         Decimal  @db.Decimal(10, 2)\n  membership_period        Int\n  original_point           Int?\n  multiplied_point         Int?\n  member                   member[]\n}\n\nmodel order_discounts {\n  order_discount_id    Int           @id @default(autoincrement())\n  order_id             Int?\n  discount_type        String?       @db.VarChar(255)\n  discount_code        String?       @db.VarChar(255)\n  discount_description String?\n  discount_amount      Decimal?      @db.Decimal\n  discount_value_type  String?       @db.VarChar(50)\n  discount_value       Decimal?      @db.Decimal\n  is_shipping_discount Boolean?      @default(false)\n  member_order         member_order? @relation(fields: [order_id], references: [order_id], onDelete: Cascade, onUpdate: NoAction)\n}\n\nmodel order_line_item_discounts {\n  line_item_discount_id Int               @id(map: \"line_item_discounts_pkey\") @default(autoincrement())\n  order_line_item_id    Int?\n  discount_type         String?           @db.VarChar(255)\n  discount_code         String?           @db.VarChar(255)\n  discount_description  String?\n  discount_amount       Decimal?          @db.Decimal\n  discount_value_type   String?           @db.VarChar(50)\n  discount_value        Decimal?          @db.Decimal\n  order_line_items      order_line_items? @relation(fields: [order_line_item_id], references: [line_item_id], onDelete: Cascade, onUpdate: NoAction, map: \"line_item_discounts_order_line_item_id_fkey\")\n}\n\nmodel order_line_items {\n  line_item_id              Int                         @id @default(autoincrement())\n  order_id                  Int?\n  webstore_line_item_id     String?                     @db.VarChar(255)\n  product_id                String?                     @db.VarChar(255)\n  variant_id                String?                     @db.VarChar(255)\n  sku                       String?                     @db.VarChar(255)\n  item_name                 String?                     @db.VarChar(255)\n  item_qty                  Int?\n  item_unit_price           Decimal?                    @db.Decimal\n  item_subtotal_price       Decimal?                    @db.Decimal\n  item_total_discount       Decimal?                    @db.Decimal\n  item_total_price          Decimal?                    @db.Decimal\n  order_line_item_discounts order_line_item_discounts[]\n  member_order              member_order?               @relation(fields: [order_id], references: [order_id], onDelete: Cascade, onUpdate: NoAction)\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel point_earning_record {\n  point_earning_id   Int           @id @default(autoincrement())\n  point_earning_date DateTime      @db.Timestamptz(6)\n  rule_type          String        @db.VarChar(255)\n  point_earning      Int\n  order_id           Int?\n  referral_code      String?       @db.VarChar(255)\n  member_id          Int\n  order_phone        String?       @default(\"\") @db.VarChar(50)\n  member             member        @relation(fields: [member_id], references: [member_id], onDelete: NoAction, onUpdate: NoAction)\n  member_order       member_order? @relation(fields: [order_id], references: [order_id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel purchase_amount_rule_setting {\n  purchase_amount_rule_setting_id Int               @default(autoincrement())\n  member_point_rule_id            Int               @id @unique(map: \"purchase_amount_rule_setting_member_point_rule_id_unique\")\n  purchase_amount                 Int\n  point_awarded                   Int\n  member_point_rule               member_point_rule @relation(fields: [member_point_rule_id], references: [member_point_rule_id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel purchase_count_rule_setting {\n  purchase_count_rule_setting_id Int               @default(autoincrement())\n  member_point_rule_id           Int               @id @unique(map: \"purchase_count_rule_setting_member_point_rule_id_unique\")\n  purchase_count                 Int\n  point_awarded                  Int\n  member_point_rule              member_point_rule @relation(fields: [member_point_rule_id], references: [member_point_rule_id], onDelete: NoAction, onUpdate: NoAction)\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel redemption_item {\n  redemption_item_id     Int                          @id @default(autoincrement())\n  redemption_item_name   String                       @db.VarChar(255)\n  redemption_type        redemption_type_enum?\n  discount_amount        Decimal?                     @db.Decimal(10, 2)\n  quantity_available     Int?\n  minimum_spending       Decimal?                     @db.Decimal(10, 2)\n  fixed_discount_cap     Decimal?                     @db.Decimal(10, 2)\n  validity_period        Int?\n  valid_from             DateTime?                    @db.Timestamp(6)\n  valid_until            DateTime?                    @db.Timestamp(6)\n  created_at             DateTime?                    @default(now()) @db.Timestamp(6)\n  updated_at             DateTime?                    @default(now()) @db.Timestamp(6)\n  deleted_status         Boolean?                     @default(false)\n  redeem_point           Int?\n  redemption_item_status redemption_item_status_enum?\n  redemption_content     String?\n  redemption_term        String?\n  redemption_record      redemption_record[]\n}\n\nmodel redemption_record {\n  redemption_record_id    Int              @id @default(autoincrement())\n  member_id               Int?\n  redemption_item_id      Int?\n  received_date           DateTime?        @default(now()) @db.Timestamp(6)\n  redeem_point            Int?\n  redeem_code             String?\n  webstore_redeem_code_id String?\n  end_date                DateTime?        @db.Timestamp(6)\n  member                  member?          @relation(fields: [member_id], references: [member_id], onDelete: NoAction, onUpdate: NoAction)\n  redemption_item         redemption_item? @relation(fields: [redemption_item_id], references: [redemption_item_id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel referral_rule_setting {\n  referral_rule_setting_id Int               @default(autoincrement())\n  member_point_rule_id     Int               @id @unique(map: \"referral_rule_setting_member_point_rule_id_unique\")\n  points_per_referral      Int\n  member_point_rule        member_point_rule @relation(fields: [member_point_rule_id], references: [member_point_rule_id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel shop_tokens {\n  shop         String @id\n  access_token String\n}\n\nmodel wati_template {\n  wati_template_id     Int                   @id @default(autoincrement())\n  template_uuid        String                @unique(map: \"wati_template_template_uuid_unique\") @db.VarChar(255)\n  element_name         String                @db.VarChar(255)\n  category             String?               @db.VarChar(100)\n  wati_template_status String?               @db.VarChar(50)\n  last_modified        DateTime?             @db.Timestamp(6)\n  template_type        String?               @db.VarChar(50)\n  body                 String?\n  body_original        String?\n  footer               String?\n  button_type          Boolean\n  header_present       Boolean\n  created_at           DateTime?             @default(now()) @db.Timestamp(6)\n  updated_at           DateTime?             @default(now()) @db.Timestamp(6)\n  wati_template_param  wati_template_param[]\n}\n\nmodel wati_template_param {\n  wati_template_params_id Int           @id @default(autoincrement())\n  wati_template_id        Int\n  param_name              String?       @db.VarChar(255)\n  param_value             String?\n  created_at              DateTime?     @default(now()) @db.Timestamp(6)\n  updated_at              DateTime?     @default(now()) @db.Timestamp(6)\n  wati_template           wati_template @relation(fields: [wati_template_id], references: [wati_template_id], onDelete: Cascade, onUpdate: NoAction)\n}\n\nenum broadcast_history_status_enum {\n  pending\n  sent\n  edited\n  cancelled\n  failed\n}\n\nenum broadcast_status_enum {\n  pending\n  sent\n  all_done\n}\n\nenum discount_code_status_enum {\n  expired\n  active\n  suspended\n  scheduled\n}\n\nenum discount_type_enum {\n  fixed_amount\n  percentage\n}\n\nenum membership_status_enum {\n  expired\n  active\n  suspended\n}\n\nenum redemption_item_status_enum {\n  expired\n  active\n  suspended\n  scheduled\n}\n\nenum redemption_type_enum {\n  fixed_amount\n  percentage\n}\n\nenum use_limit_enum {\n  single_use\n  once_per_customer\n  unlimited\n}\n",
  "inlineSchemaHash": "227d85b240492ce60b23c617d62e7e9a70e5091add5d079f8a64b09917bd5ace",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "external-db/generated",
    "generated",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Session\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isOnline\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"admin_login\":{\"dbName\":null,\"fields\":[{\"name\":\"login_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_password_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"failed_login_attempts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"login_id\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"admin_role\",\"relationName\":\"admin_loginToadmin_role\",\"relationFromFields\":[\"admin_role_id\"],\"relationToFields\":[\"admin_role_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"admin_role\":{\"dbName\":null,\"fields\":[{\"name\":\"admin_role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_role_access\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_login\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"admin_login\",\"relationName\":\"admin_loginToadmin_role\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"admin_setting\":{\"dbName\":null,\"fields\":[{\"name\":\"admin_setting_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membership_extend_method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membership_end_result\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membership_period\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":12,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wati_end_point\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wati_access_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"broadcast\":{\"dbName\":null,\"fields\":[{\"name\":\"broadcast_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"broadcast_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wati_template\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wati_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wati_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"broadcast_now\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scheduled_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"broadcast_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"broadcast_status_enum\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"broadcast_history\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"broadcast_history\",\"relationName\":\"broadcastTobroadcast_history\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"broadcast_history\":{\"dbName\":null,\"fields\":[{\"name\":\"broadcast_history_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"broadcast_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sent_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"broadcast_history_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"broadcast_history_status_enum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"broadcast\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"broadcast\",\"relationName\":\"broadcastTobroadcast_history\",\"relationFromFields\":[\"broadcast_id\"],\"relationToFields\":[\"broadcast_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"discount_code\":{\"dbName\":null,\"fields\":[{\"name\":\"discount_code_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webstore_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webstore_discount_code_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_code_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"discount_type_enum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minimum_spending\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fixed_discount_cap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_limit_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"use_limit_enum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valid_from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valid_until\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_code_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"discount_code_status_enum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_code_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_code_term\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"member\":{\"dbName\":null,\"fields\":[{\"name\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_referral_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"point\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membership_expiry_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referrer_member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthday\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_tag\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membership_tier_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"points_balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membership_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"membership_status_enum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membership_start_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_order_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_point_earn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membership_period_point_earn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membership_tier\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"membership_tier\",\"relationName\":\"memberTomembership_tier\",\"relationFromFields\":[\"membership_tier_id\"],\"relationToFields\":[\"membership_tier_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_login\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"member_login\",\"relationName\":\"memberTomember_login\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"point_earning_record\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"point_earning_record\",\"relationName\":\"memberTopoint_earning_record\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redemption_record\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"redemption_record\",\"relationName\":\"memberToredemption_record\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"member_login\":{\"dbName\":null,\"fields\":[{\"name\":\"login_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_password_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"failed_login_attempts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"member\",\"relationName\":\"memberTomember_login\",\"relationFromFields\":[\"member_id\"],\"relationToFields\":[\"member_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"member_order\":{\"dbName\":null,\"fields\":[{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webstore_order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webstore_order_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_fulfilled_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delivery_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_discounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_discounts\",\"relationName\":\"member_orderToorder_discounts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_line_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_line_items\",\"relationName\":\"member_orderToorder_line_items\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"point_earning_record\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"point_earning_record\",\"relationName\":\"member_orderTopoint_earning_record\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"member_point_rule\":{\"dbName\":null,\"fields\":[{\"name\":\"member_point_rule_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rule_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rule_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchase_amount_rule_setting\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"purchase_amount_rule_setting\",\"relationName\":\"member_point_ruleTopurchase_amount_rule_setting\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchase_count_rule_setting\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"purchase_count_rule_setting\",\"relationName\":\"member_point_ruleTopurchase_count_rule_setting\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referral_rule_setting\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"referral_rule_setting\",\"relationName\":\"member_point_ruleToreferral_rule_setting\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"membership_tier\":{\"dbName\":null,\"fields\":[{\"name\":\"membership_tier_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membership_tier_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membership_tier_sequence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"require_point\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extend_membership_point\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"point_multiplier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membership_period\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"original_point\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"multiplied_point\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"member\",\"relationName\":\"memberTomembership_tier\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"order_discounts\":{\"dbName\":null,\"fields\":[{\"name\":\"order_discount_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_value_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_shipping_discount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"member_order\",\"relationName\":\"member_orderToorder_discounts\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"order_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"order_line_item_discounts\":{\"dbName\":null,\"fields\":[{\"name\":\"line_item_discount_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_line_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_value_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_line_items\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_line_items\",\"relationName\":\"order_line_item_discountsToorder_line_items\",\"relationFromFields\":[\"order_line_item_id\"],\"relationToFields\":[\"line_item_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"order_line_items\":{\"dbName\":null,\"fields\":[{\"name\":\"line_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webstore_line_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"variant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sku\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item_qty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item_unit_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item_subtotal_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item_total_discount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item_total_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_line_item_discounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_line_item_discounts\",\"relationName\":\"order_line_item_discountsToorder_line_items\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"member_order\",\"relationName\":\"member_orderToorder_line_items\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"order_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"point_earning_record\":{\"dbName\":null,\"fields\":[{\"name\":\"point_earning_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"point_earning_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rule_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"point_earning\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referral_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"member\",\"relationName\":\"memberTopoint_earning_record\",\"relationFromFields\":[\"member_id\"],\"relationToFields\":[\"member_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"member_order\",\"relationName\":\"member_orderTopoint_earning_record\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"order_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"purchase_amount_rule_setting\":{\"dbName\":null,\"fields\":[{\"name\":\"purchase_amount_rule_setting_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_point_rule_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchase_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"point_awarded\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_point_rule\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"member_point_rule\",\"relationName\":\"member_point_ruleTopurchase_amount_rule_setting\",\"relationFromFields\":[\"member_point_rule_id\"],\"relationToFields\":[\"member_point_rule_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"purchase_count_rule_setting\":{\"dbName\":null,\"fields\":[{\"name\":\"purchase_count_rule_setting_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_point_rule_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchase_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"point_awarded\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_point_rule\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"member_point_rule\",\"relationName\":\"member_point_ruleTopurchase_count_rule_setting\",\"relationFromFields\":[\"member_point_rule_id\"],\"relationToFields\":[\"member_point_rule_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"redemption_item\":{\"dbName\":null,\"fields\":[{\"name\":\"redemption_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redemption_item_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redemption_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"redemption_type_enum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity_available\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minimum_spending\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fixed_discount_cap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validity_period\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valid_from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valid_until\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redeem_point\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redemption_item_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"redemption_item_status_enum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redemption_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redemption_term\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redemption_record\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"redemption_record\",\"relationName\":\"redemption_itemToredemption_record\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"redemption_record\":{\"dbName\":null,\"fields\":[{\"name\":\"redemption_record_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redemption_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"received_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redeem_point\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redeem_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webstore_redeem_code_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"member\",\"relationName\":\"memberToredemption_record\",\"relationFromFields\":[\"member_id\"],\"relationToFields\":[\"member_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redemption_item\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"redemption_item\",\"relationName\":\"redemption_itemToredemption_record\",\"relationFromFields\":[\"redemption_item_id\"],\"relationToFields\":[\"redemption_item_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"referral_rule_setting\":{\"dbName\":null,\"fields\":[{\"name\":\"referral_rule_setting_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_point_rule_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"points_per_referral\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_point_rule\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"member_point_rule\",\"relationName\":\"member_point_ruleToreferral_rule_setting\",\"relationFromFields\":[\"member_point_rule_id\"],\"relationToFields\":[\"member_point_rule_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"shop_tokens\":{\"dbName\":null,\"fields\":[{\"name\":\"shop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"access_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wati_template\":{\"dbName\":null,\"fields\":[{\"name\":\"wati_template_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"template_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"element_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wati_template_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_modified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"template_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body_original\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"footer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"button_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"header_present\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wati_template_param\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"wati_template_param\",\"relationName\":\"wati_templateTowati_template_param\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wati_template_param\":{\"dbName\":null,\"fields\":[{\"name\":\"wati_template_params_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wati_template_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"param_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"param_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wati_template\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"wati_template\",\"relationName\":\"wati_templateTowati_template_param\",\"relationFromFields\":[\"wati_template_id\"],\"relationToFields\":[\"wati_template_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"broadcast_history_status_enum\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"sent\",\"dbName\":null},{\"name\":\"edited\",\"dbName\":null},{\"name\":\"cancelled\",\"dbName\":null},{\"name\":\"failed\",\"dbName\":null}],\"dbName\":null},\"broadcast_status_enum\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"sent\",\"dbName\":null},{\"name\":\"all_done\",\"dbName\":null}],\"dbName\":null},\"discount_code_status_enum\":{\"values\":[{\"name\":\"expired\",\"dbName\":null},{\"name\":\"active\",\"dbName\":null},{\"name\":\"suspended\",\"dbName\":null},{\"name\":\"scheduled\",\"dbName\":null}],\"dbName\":null},\"discount_type_enum\":{\"values\":[{\"name\":\"fixed_amount\",\"dbName\":null},{\"name\":\"percentage\",\"dbName\":null}],\"dbName\":null},\"membership_status_enum\":{\"values\":[{\"name\":\"expired\",\"dbName\":null},{\"name\":\"active\",\"dbName\":null},{\"name\":\"suspended\",\"dbName\":null}],\"dbName\":null},\"redemption_item_status_enum\":{\"values\":[{\"name\":\"expired\",\"dbName\":null},{\"name\":\"active\",\"dbName\":null},{\"name\":\"suspended\",\"dbName\":null},{\"name\":\"scheduled\",\"dbName\":null}],\"dbName\":null},\"redemption_type_enum\":{\"values\":[{\"name\":\"fixed_amount\",\"dbName\":null},{\"name\":\"percentage\",\"dbName\":null}],\"dbName\":null},\"use_limit_enum\":{\"values\":[{\"name\":\"single_use\",\"dbName\":null},{\"name\":\"once_per_customer\",\"dbName\":null},{\"name\":\"unlimited\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "external-db/generated/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "external-db/generated/schema.prisma")
