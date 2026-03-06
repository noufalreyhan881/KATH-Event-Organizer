/**
 * String and number formatting utilities
 */

/**
 * Format currency
 */
export const formatCurrency = (
  amount: number,
  currency: string = 'IDR',
  locale: string = 'id-ID'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format number with thousand separator
 */
export const formatNumber = (num: number, locale: string = 'id-ID'): string => {
  return new Intl.NumberFormat(locale).format(num);
};

/**
 * Format percentage
 */
export const formatPercentage = (value: number, decimals: number = 0): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};

/**
 * Format file size
 */
export const formatFileSize = (bytes: number): string => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
};

/**
 * Format bytes to human readable
 */
export const formatBytes = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Highlight text (add HTML tags)
 */
export const highlightText = (text: string, highlight: string): string => {
  const regex = new RegExp(`(${highlight})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};

/**
 * Render markdown-like formatting (basic)
 */
export const parseMarkdown = (text: string): string => {
  let formatted = text;

  // Bold: **text** -> <strong>text</strong>
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Italic: *text* -> <em>text</em>
  formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Line break
  formatted = formatted.replace(/\n/g, '<br />');

  return formatted;
};

/**
 * Strip HTML tags
 */
export const stripHtmlTags = (html: string): string => {
  return html.replace(/<[^>]*>/g, '');
};

/**
 * Pluralize word
 */
export const pluralize = (word: string, count: number): string => {
  return count !== 1 ? `${word}s` : word;
};
