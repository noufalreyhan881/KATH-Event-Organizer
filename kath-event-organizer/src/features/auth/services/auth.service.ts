/**
 * Auth feature service - API calls
 */

import { apiPost } from '@/lib/api-client';
import { API_ENDPOINTS } from '@/config/api';
import type { LoginResponse, RegisterResponse } from '@/types/api';
import type { LoginRequest, RegisterRequest } from '../types';

/**
 * Login service
 */
export const authService = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    return apiPost<LoginResponse>(API_ENDPOINTS.AUTH_LOGIN, data);
  },

  async register(data: RegisterRequest): Promise<RegisterResponse> {
    return apiPost<RegisterResponse>(API_ENDPOINTS.AUTH_REGISTER, data);
  },

  async logout(): Promise<void> {
    return apiPost(API_ENDPOINTS.AUTH_LOGOUT);
  },

  async refresh(): Promise<{ accessToken: string }> {
    return apiPost(API_ENDPOINTS.AUTH_REFRESH);
  },
};

export default authService;
