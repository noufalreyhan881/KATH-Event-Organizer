/**
 * Services feature barrel export
 */

export const SERVICES_CONSTANTS = {
  DEFAULT_SERVICES: [
    {
      id: '1',
      name: 'Event Planning',
      description: 'Comprehensive event planning services',
      icon: 'calendar',
      features: ['Venue selection', 'Guest management', 'Catering coordination'],
    },
    {
      id: '2',
      name: 'Decoration',
      description: 'Professional decoration services',
      icon: 'palette',
      features: ['Theme design', 'Setup', 'Takedown'],
    },
  ] as const,
} as const;
