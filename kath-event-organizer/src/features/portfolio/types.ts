/**
 * Portfolio feature types
 */

import type { Portfolio as PortfolioEntity } from '@/types/entity';

export interface PortfolioFilters {
  categoryId?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface CreatePortfolioRequest {
  title: string;
  description: string;
  categoryId: string;
  images: string[];
  clientName?: string;
  completionDate?: string;
  featured: boolean;
}

export interface UpdatePortfolioRequest extends Partial<CreatePortfolioRequest> {
  id: string;
}

export type Portfolio = PortfolioEntity;
