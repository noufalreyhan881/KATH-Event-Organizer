/**
 * Competition hooks - CRUD operations for competitions
 */

'use client';

import { useState, useCallback } from 'react';
import { competitionService } from '../services';
import type { Competition, CreateCompetitionRequest, UpdateCompetitionRequest } from '../types';

interface UseCompetitionReturn {
  competitions: Competition[];
  competition: Competition | null;
  isLoading: boolean;
  error: string | null;
  fetchCompetitions: (params?: { page?: number; limit?: number; status?: string }) => Promise<void>;
  fetchCompetition: (id: string) => Promise<void>;
  createCompetition: (data: CreateCompetitionRequest) => Promise<Competition>;
  updateCompetition: (id: string, data: UpdateCompetitionRequest) => Promise<Competition>;
  deleteCompetition: (id: string) => Promise<void>;
  clearError: () => void;
}

/**
 * Hook for competition CRUD operations
 */
export const useCompetition = (): UseCompetitionReturn => {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [competition, setCompetition] = useState<Competition | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => setError(null), []);

  const fetchCompetitions = useCallback(async (params = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await competitionService.getList(params);
      setCompetitions(result.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch competitions');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchCompetition = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await competitionService.getDetail(id);
      setCompetition(result.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch competition');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createCompetition = useCallback(async (data: CreateCompetitionRequest): Promise<Competition> => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await competitionService.create(data);
      setCompetitions(prev => [result.data, ...prev]);
      return result.data;
    } catch (err: any) {
      setError(err.message || 'Failed to create competition');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateCompetition = useCallback(async (id: string, data: UpdateCompetitionRequest): Promise<Competition> => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await competitionService.update(id, data);
      setCompetitions(prev => prev.map(c => c.id === id ? result.data : c));
      if (competition?.id === id) {
        setCompetition(result.data);
      }
      return result.data;
    } catch (err: any) {
      setError(err.message || 'Failed to update competition');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [competition]);

  const deleteCompetition = useCallback(async (id: string): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      await competitionService.delete(id);
      setCompetitions(prev => prev.filter(c => c.id !== id));
      if (competition?.id === id) {
        setCompetition(null);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to delete competition');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [competition]);

  return {
    competitions,
    competition,
    isLoading,
    error,
    fetchCompetitions,
    fetchCompetition,
    createCompetition,
    updateCompetition,
    deleteCompetition,
    clearError,
  };
};