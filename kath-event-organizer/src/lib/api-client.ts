/**
 * API client wrapper for making HTTP requests
 */

import type { ApiResponse, ApiError } from '@/types';
import { env } from '@/config/env';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestOptions<T = any> {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: T;
  params?: Record<string, any>;
  timeout?: number;
  credentials?: RequestCredentials;
}

/**
 * Make HTTP request
 */
export const apiClient = async <T = any>(
  url: string,
  options: RequestOptions = {}
): Promise<T> => {
  const {
    method = 'GET',
    headers = {},
    body,
    params,
    timeout = 10000,
    credentials = 'include',
  } = options;

  // Build query string from params
  let finalUrl = url;
  if (params && Object.keys(params).length > 0) {
    const queryString = new URLSearchParams(params).toString();
    finalUrl = `${url}?${queryString}`;
  }

  // Prepare headers
  const finalHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // Get auth token if available
  const token = getAuthToken();
  if (token) {
    finalHeaders['Authorization'] = `Bearer ${token}`;
  }

  // Create abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(finalUrl, {
      method,
      headers: finalHeaders,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
      credentials,
    });

    clearTimeout(timeoutId);

    // Parse response
    let data: any;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    // Handle errors
    if (!response.ok) {
      const error: ApiError = {
        code: `HTTP_${response.status}`,
        message: data?.message || response.statusText,
        statusCode: response.status,
        details: data?.details,
      };
      throw error;
    }

    return data as T;
  } catch (error: any) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      throw new Error('Request timeout');
    }

    if (error instanceof TypeError) {
      throw new Error('Network error');
    }

    throw error;
  }
};

/**
 * GET request
 */
export const apiGet = async <T = any>(
  url: string,
  options?: Omit<RequestOptions, 'method' | 'body'>
): Promise<T> => {
  return apiClient<T>(url, { ...options, method: 'GET' });
};

/**
 * POST request
 */
export const apiPost = async <T = any>(
  url: string,
  body?: any,
  options?: Omit<RequestOptions, 'method'>
): Promise<T> => {
  return apiClient<T>(url, { ...options, method: 'POST', body });
};

/**
 * PUT request
 */
export const apiPut = async <T = any>(
  url: string,
  body?: any,
  options?: Omit<RequestOptions, 'method'>
): Promise<T> => {
  return apiClient<T>(url, { ...options, method: 'PUT', body });
};

/**
 * PATCH request
 */
export const apiPatch = async <T = any>(
  url: string,
  body?: any,
  options?: Omit<RequestOptions, 'method'>
): Promise<T> => {
  return apiClient<T>(url, { ...options, method: 'PATCH', body });
};

/**
 * DELETE request
 */
export const apiDelete = async <T = any>(
  url: string,
  options?: Omit<RequestOptions, 'method' | 'body'>
): Promise<T> => {
  return apiClient<T>(url, { ...options, method: 'DELETE' });
};

/**
 * Get auth token from localStorage or other storage
 */
const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem('auth_token');
  } catch {
    return null;
  }
};
