/**
 * Application route constants
 * Use these instead of hardcoding route strings
 */

// Public routes
export const PUBLIC_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  BLOG: '/blog',
  BLOG_DETAIL: (slug: string) => `/blog/${slug}`,
  PORTFOLIO: '/portfolio',
  PORTFOLIO_DETAIL: (slug: string) => `/portfolio/${slug}`,
  CONTACT: '/contact',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
} as const;

// Dashboard routes
export const DASHBOARD_ROUTES = {
  HOME: '/dashboard',
  
  // Admin routes
  ADMIN: '/dashboard/admin',
  ADMIN_BLOG: '/dashboard/admin/blog-management',
  ADMIN_BLOG_CREATE: '/dashboard/admin/blog-management/create',
  ADMIN_BLOG_EDIT: (id: string) => `/dashboard/admin/blog-management/${id}/edit`,
  ADMIN_BLOG_DELETE: (id: string) => `/dashboard/admin/blog-management/${id}/delete`,
  
  ADMIN_PORTFOLIO: '/dashboard/admin/portfolio-management',
  ADMIN_PORTFOLIO_CREATE: '/dashboard/admin/portfolio-management/create',
  ADMIN_PORTFOLIO_EDIT: (id: string) => `/dashboard/admin/portfolio-management/${id}/edit`,
  ADMIN_PORTFOLIO_DELETE: (id: string) => `/dashboard/admin/portfolio-management/${id}/delete`,
  
  ADMIN_SETTINGS: '/dashboard/admin/settings',
  
  // User routes
  USER: '/dashboard/user',
  USER_PROFILE: '/dashboard/user/profile',
  USER_PROFILE_EDIT: '/dashboard/user/profile/edit',
  USER_PROFILE_HISTORY: '/dashboard/user/profile/history',
  
  USER_COMPETITIONS: '/dashboard/user/competitions',
  USER_COMPETITION_DETAIL: (id: string) => `/dashboard/user/competitions/${id}`,
  
  USER_TEAM: '/dashboard/user/team',
  USER_TEAM_CREATE: '/dashboard/user/team/create',
  USER_TEAM_DETAIL: (id: string) => `/dashboard/user/team/${id}`,
  USER_TEAM_SETTINGS: (id: string) => `/dashboard/user/team/${id}/settings`,
  USER_TEAM_DELETE: (id: string) => `/dashboard/user/team/${id}/delete`,
  
  USER_SETTINGS: '/dashboard/user/settings',
} as const;

// Auth routes
export const AUTH_ROUTES = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
} as const;
