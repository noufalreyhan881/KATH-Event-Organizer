/**
 * Auth utilities
 */

import { generateSlug } from '@/lib/validation';

/**
 * Format user name for display
 */
export const formatUserName = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Extract first name from full name
 */
export const getFirstName = (fullName: string): string => {
  return fullName.split(' ')[0];
};

/**
 * Extract last name from full name
 */
export const getLastName = (fullName: string): string => {
  const parts = fullName.split(' ');
  return parts.length > 1 ? parts[parts.length - 1] : '';
};
