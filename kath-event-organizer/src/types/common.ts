/**
 * Common types and interfaces used across the application
 */

/**
 * Standard UUID type
 */
export type UUID = string & { readonly __brand: 'UUID' };

/**
 * Timestamp type
 */
export type Timestamp = Date;

/**
 * Pagination request
 */
export interface PaginationQuery {
  page: number;
  limit: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

/**
 * Pagination response wrapper
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasMore: boolean;
}

/**
 * Standard API response
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Error response
 */
export interface ApiError {
  code: string;
  message: string;
  statusCode: number;
  details?: Record<string, any>;
}

/**
 * Authentication token
 */
export interface AuthToken {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
}

/**
 * Standard timestamps
 */
export interface Timestamps {
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt?: Timestamp | null;
}

/**
 * All entities should inherit this
 */
export interface BaseEntity extends Timestamps {
  id: UUID;
}
