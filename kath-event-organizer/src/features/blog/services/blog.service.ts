/**
 * Blog feature service - API calls
 */

import { apiGet, apiPost, apiPut, apiDelete } from '@/lib/api-client';
import { API_ENDPOINTS } from '@/config/api';
import type { BlogListResponse, BlogDetailResponse, BlogCreateResponse, BlogUpdateResponse } from '@/types/api';
import type { BlogFormInput } from '@/types/form';
import type { BlogFilters } from '../types';

/**
 * Blog service
 */
export const blogService = {
  async getList(filters?: BlogFilters): Promise<BlogListResponse> {
    return apiGet(API_ENDPOINTS.BLOG_LIST, { params: filters });
  },

  async getDetail(id: string): Promise<BlogDetailResponse> {
    return apiGet(API_ENDPOINTS.BLOG_DETAIL(id));
  },

  async create(data: BlogFormInput): Promise<BlogCreateResponse> {
    return apiPost(API_ENDPOINTS.BLOG_CREATE, data);
  },

  async update(id: string, data: Partial<BlogFormInput>): Promise<BlogUpdateResponse> {
    return apiPut(API_ENDPOINTS.BLOG_UPDATE(id), data);
  },

  async delete(id: string): Promise<void> {
    return apiDelete(API_ENDPOINTS.BLOG_DELETE(id));
  },
};

export default blogService;
