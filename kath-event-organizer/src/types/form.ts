/**
 * Form types and validation schemas
 */

/**
 * Login form input
 */
export interface LoginFormInput {
  email: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Register form input
 */
export interface RegisterFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

/**
 * Blog form input
 */
export interface BlogFormInput {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: File | string;
  category: string;
  isPublished: boolean;
}

/**
 * Portfolio form input
 */
export interface PortfolioFormInput {
  title: string;
  slug: string;
  description: string;
  image: File | string;
  category: string;
  tags: string[];
  link?: string;
  isPublished: boolean;
}

/**
 * Team form input
 */
export interface TeamFormInput {
  name: string;
  description: string;
  logo?: File | string;
}

/**
 * Profile update input
 */
export interface ProfileUpdateInput {
  name: string;
  bio?: string;
  avatar?: File | string;
}

/**
 * Password change input
 */
export interface PasswordChangeInput {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
