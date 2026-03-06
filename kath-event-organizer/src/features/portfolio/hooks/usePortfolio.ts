/**
 * Portfolio hooks - CRUD operations for portfolio items
 */

'use client';

import { useState, useCallback } from 'react';
import { portfolioService } from '../services';
import type { Portfolio, CreatePortfolioRequest, UpdatePortfolioRequest } from '../types';

interface UsePortfolioReturn {
  portfolios: Portfolio[];
  portfolio: Portfolio | null;
  isLoading: boolean;
  error: string | null;
  fetchPortfolios: (params?: { page?: number; limit?: number; category?: string }) => Promise<void>;
  fetchPortfolio: (id: string) => Promise<void>;
  createPortfolio: (data: CreatePortfolioRequest) => Promise<Portfolio>;
  updatePortfolio: (id: string, data: UpdatePortfolioRequest) => Promise<Portfolio>;
  deletePortfolio: (id: string) => Promise<void>;
  clearError: () => void;
}

/**
 * Hook for portfolio CRUD operations
 */
export const usePortfolio = (): UsePortfolioReturn => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => setError(null), []);

  const fetchPortfolios = useCallback(async (params = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await portfolioService.getList(params);
      setPortfolios(result.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch portfolios');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchPortfolio = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await portfolioService.getDetail(id);
      setPortfolio(result.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch portfolio');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createPortfolio = useCallback(async (data: CreatePortfolioRequest): Promise<Portfolio> => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await portfolioService.create(data);
      setPortfolios(prev => [result.data, ...prev]);
      return result.data;
    } catch (err: any) {
      setError(err.message || 'Failed to create portfolio');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updatePortfolio = useCallback(async (id: string, data: UpdatePortfolioRequest): Promise<Portfolio> => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await portfolioService.update(id, data);
      setPortfolios(prev => prev.map(p => p.id === id ? result.data : p));
      if (portfolio?.id === id) {
        setPortfolio(result.data);
      }
      return result.data;
    } catch (err: any) {
      setError(err.message || 'Failed to update portfolio');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [portfolio]);

  const deletePortfolio = useCallback(async (id: string): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      await portfolioService.delete(id);
      setPortfolios(prev => prev.filter(p => p.id !== id));
      if (portfolio?.id === id) {
        setPortfolio(null);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to delete portfolio');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [portfolio]);

  return {
    portfolios,
    portfolio,
    isLoading,
    error,
    fetchPortfolios,
    fetchPortfolio,
    createPortfolio,
    updatePortfolio,
    deletePortfolio,
    clearError,
  };
};