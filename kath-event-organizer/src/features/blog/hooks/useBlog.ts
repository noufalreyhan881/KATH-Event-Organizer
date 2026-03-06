/**
 * Blog hooks - CRUD operations for blog posts
 */

'use client';

import { useState, useCallback } from 'react';
import { blogService } from '../services';
import type { BlogPost, CreateBlogRequest, UpdateBlogRequest } from '../types';

interface UseBlogReturn {
  blogs: BlogPost[];
  blog: BlogPost | null;
  isLoading: boolean;
  error: string | null;
  fetchBlogs: (params?: { page?: number; limit?: number; category?: string }) => Promise<void>;
  fetchBlog: (id: string) => Promise<void>;
  createBlog: (data: CreateBlogRequest) => Promise<BlogPost>;
  updateBlog: (id: string, data: UpdateBlogRequest) => Promise<BlogPost>;
  deleteBlog: (id: string) => Promise<void>;
  clearError: () => void;
}

/**
 * Hook for blog CRUD operations
 */
export const useBlog = (): UseBlogReturn => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => setError(null), []);

  const fetchBlogs = useCallback(async (params = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await blogService.getList(params);
      setBlogs(result.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch blogs');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchBlog = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await blogService.getDetail(id);
      setBlog(result.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch blog');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createBlog = useCallback(async (data: CreateBlogRequest): Promise<BlogPost> => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await blogService.create(data);
      setBlogs(prev => [result.data, ...prev]);
      return result.data;
    } catch (err: any) {
      setError(err.message || 'Failed to create blog');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateBlog = useCallback(async (id: string, data: UpdateBlogRequest): Promise<BlogPost> => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await blogService.update(id, data);
      setBlogs(prev => prev.map(b => b.id === id ? result.data : b));
      if (blog?.id === id) {
        setBlog(result.data);
      }
      return result.data;
    } catch (err: any) {
      setError(err.message || 'Failed to update blog');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [blog]);

  const deleteBlog = useCallback(async (id: string): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      await blogService.delete(id);
      setBlogs(prev => prev.filter(b => b.id !== id));
      if (blog?.id === id) {
        setBlog(null);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to delete blog');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [blog]);

  return {
    blogs,
    blog,
    isLoading,
    error,
    fetchBlogs,
    fetchBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    clearError,
  };
};