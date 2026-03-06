/**
 * Blog feature types
 */

import type { Blog } from '@/types/entity';

export interface BlogFilters {
  categoryId?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface CreateBlogRequest {
  title: string;
  content: string;
  excerpt?: string;
  categoryId: string;
  tags?: string[];
  featuredImage?: string;
  published: boolean;
}

export interface UpdateBlogRequest extends Partial<CreateBlogRequest> {
  id: string;
}

export type BlogPost = Blog;
