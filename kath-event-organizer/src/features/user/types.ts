/**
 * User feature types and constants - placeholder
 */

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
}

export const USER_CONSTANTS = {
  DEFAULT_PAGE_SIZE: 10,
  BIO_MAX_LENGTH: 500,
  NAME_MAX_LENGTH: 100,
} as const;
