/**
 * Blog utilities
 */

import { formatDate } from '@/lib/date';
import { truncate } from '@/lib/utils';

/**
 * Format blog excerpt
 */
export const formatBlogExcerpt = (text: string, length: number = 150): string => {
  return truncate(text, length);
};

/**
 * Extract reading time (estimate)
 */
export const getReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

/**
 * Filter blogs by category
 */
export const filterBlogsByCategory = (blogs: any[], categoryId: string): any[] => {
  return blogs.filter(blog => blog.category === categoryId);
};

/**
 * Filter blogs by search term
 */
export const searchBlogs = (blogs: any[], searchTerm: string): any[] => {
  const term = searchTerm.toLowerCase();
  return blogs.filter(
    blog =>
      blog.title.toLowerCase().includes(term) ||
      blog.excerpt.toLowerCase().includes(term) ||
      blog.content.toLowerCase().includes(term)
  );
};
