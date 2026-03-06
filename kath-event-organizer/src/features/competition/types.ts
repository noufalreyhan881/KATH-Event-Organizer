/**
 * Competition feature types and constants - placeholder
 */

export interface CompetitionFilters {
  status?: 'upcoming' | 'ongoing' | 'completed';
  search?: string;
  page?: number;
  limit?: number;
}

export const COMPETITION_CONSTANTS = {
  DEFAULT_PAGE_SIZE: 12,
  STATUS_OPTIONS: [
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'ongoing', label: 'Ongoing' },
    { value: 'completed', label: 'Completed' },
  ] as const,
} as const;
