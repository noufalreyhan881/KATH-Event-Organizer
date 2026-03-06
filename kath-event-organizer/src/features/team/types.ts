/**
 * Team feature types and constants - placeholder
 */

export interface TeamFilters {
  search?: string;
  page?: number;
  limit?: number;
}

export const TEAM_CONSTANTS = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_MEMBERS: 10,
  MIN_MEMBERS: 1,
} as const;
