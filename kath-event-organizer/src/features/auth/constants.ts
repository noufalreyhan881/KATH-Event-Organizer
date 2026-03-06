/**
 * Auth feature constants
 */

export const AUTH_CONSTANTS = {
  SESSION_STORAGE_KEY: 'auth_session',
  TOKEN_STORAGE_KEY: 'auth_token',
  REFRESH_TOKEN_STORAGE_KEY: 'refresh_token',
  USER_STORAGE_KEY: 'current_user',
  TOKEN_EXPIRY_TIME: 24 * 60 * 60 * 1000, // 24 hours
} as const;
