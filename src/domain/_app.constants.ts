export const MODULE_KEYS = {
  IMPORTS: 'imports',
  STORES: 'stores',
}
export const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV
export const DRAWER_WIDTH = 289;
export const MINIMUM_PASSWORD_LENGTH = 6
export const BASE_HTTP_URL = process.env.NEXT_PUBLIC_BASE_HTTP_URL
export const TOKEN_KEY = 'access_token'
export const ROUTES = {
  DASHBOARD: '/',
  STORE: '/store',
  INVENTORY: '/inventory',
  EMPLOYEE: '/employee',
  CUSTOMER: '/customer',
  LIBRARY: {
    INDEX: '/library',
    CATEGORY: '/library/category',
    TRANSACTION_HISTORY: '/library/transaction-history',
  },
  POS: {
    INDEX: '/pos',
    TRANSACTION_HISTORY: '/pos/transaction-history',
  },
};
