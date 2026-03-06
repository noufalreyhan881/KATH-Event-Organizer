/**
 * Portfolio feature constants
 */

export const PORTFOLIO_CONSTANTS = {
  DEFAULT_PAGE_SIZE: 12,
  CATEGORIES: [
    { id: '1', name: 'Web Design' },
    { id: '2', name: 'Branding' },
    { id: '3', name: 'Photography' },
    { id: '4', name: 'Video' },
  ] as const,
} as const;
