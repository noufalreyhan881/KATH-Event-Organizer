/**
 * Blog feature constants
 */

export const BLOG_CONSTANTS = {
  DEFAULT_PAGE_SIZE: 12,
  CATEGORIES: [
    { id: '1', name: 'Technology' },
    { id: '2', name: 'Business' },
    { id: '3', name: 'Lifestyle' },
    { id: '4', name: 'Entertainment' },
  ] as const,
} as const;
