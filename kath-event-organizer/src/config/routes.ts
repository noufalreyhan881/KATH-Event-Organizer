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
  PORTFOLIO: '/portofolio',
  COMPETITIONS: '/competitions',
  PORTFOLIO_DETAIL: (slug: string) => `/portfolio/${slug}`,
  CONTACT: '/contact',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
} as const;

// Dashboard routes
export const DASHBOARD_ROUTES = {
  HOME: '/dashboard',
  
  // Admin routes
  ADMIN: '/admin',
  ADMIN_BLOG: '/admin/blog',
  ADMIN_BLOG_CREATE: '/admin/blog/new',
  ADMIN_BLOG_EDIT: (id: string) => `/admin/blog/${id}`,
  
  ADMIN_PORTFOLIO: '/admin/portfolio',
  ADMIN_PORTFOLIO_CREATE: '/admin/portfolio/new',
  ADMIN_PORTFOLIO_EDIT: (id: string) => `/admin/portfolio/${id}`,
  
  // User routes
  USER: '/user',
  USER_PROFILE: '/user/my-profile-page',
  USER_PROFILE_EDIT: '/user/my-profile-page/edit-profile-page',
  USER_PROFILE_HISTORY: '/user/my-profile-page/history',
  
  USER_COMPETITIONS: '/user/my-competition-page',
  USER_COMPETITION_DETAIL: (id: string) => `/user/my-competition-page/view-details-page`,
  
  USER_TEAM: '/user/my-team-page',
  USER_TEAM_CREATE: '/user/my-team-page/create-team',
  USER_TEAM_DETAIL: (id: string) => `/user/my-team-page/team-list`,
  USER_TEAM_SETTINGS: (id: string) => `/user/my-team-page/settings`,
  
  USER_SETTINGS: '/user/settings-page',
} as const;

// Auth routes
export const AUTH_ROUTES = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
} as const;
