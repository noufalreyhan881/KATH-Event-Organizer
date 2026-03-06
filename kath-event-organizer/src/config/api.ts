/**
 * API endpoints configuration
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  // Auth
  AUTH_LOGIN: `${API_BASE_URL}/auth/login`,
  AUTH_REGISTER: `${API_BASE_URL}/auth/register`,
  AUTH_LOGOUT: `${API_BASE_URL}/auth/logout`,
  AUTH_REFRESH: `${API_BASE_URL}/auth/refresh`,
  
  // Blog
  BLOG_LIST: `${API_BASE_URL}/blog`,
  BLOG_DETAIL: (id: string) => `${API_BASE_URL}/blog/${id}`,
  BLOG_CREATE: `${API_BASE_URL}/blog`,
  BLOG_UPDATE: (id: string) => `${API_BASE_URL}/blog/${id}`,
  BLOG_DELETE: (id: string) => `${API_BASE_URL}/blog/${id}`,
  
  // Portfolio
  PORTFOLIO_LIST: `${API_BASE_URL}/portfolio`,
  PORTFOLIO_DETAIL: (id: string) => `${API_BASE_URL}/portfolio/${id}`,
  PORTFOLIO_CREATE: `${API_BASE_URL}/portfolio`,
  PORTFOLIO_UPDATE: (id: string) => `${API_BASE_URL}/portfolio/${id}`,
  PORTFOLIO_DELETE: (id: string) => `${API_BASE_URL}/portfolio/${id}`,
  
  // Competition
  COMPETITION_LIST: `${API_BASE_URL}/competition`,
  COMPETITION_DETAIL: (id: string) => `${API_BASE_URL}/competition/${id}`,
  COMPETITION_JOIN: (id: string) => `${API_BASE_URL}/competition/${id}/join`,
  
  // Team
  TEAM_LIST: `${API_BASE_URL}/team`,
  TEAM_DETAIL: (id: string) => `${API_BASE_URL}/team/${id}`,
  TEAM_CREATE: `${API_BASE_URL}/team`,
  TEAM_UPDATE: (id: string) => `${API_BASE_URL}/team/${id}`,
  TEAM_DELETE: (id: string) => `${API_BASE_URL}/team/${id}`,
  TEAM_ADD_MEMBER: (id: string) => `${API_BASE_URL}/team/${id}/members`,
  TEAM_REMOVE_MEMBER: (id: string, memberId: string) => `${API_BASE_URL}/team/${id}/members/${memberId}`,
  
  // User
  USER_PROFILE: `${API_BASE_URL}/user/profile`,
  USER_UPDATE_PROFILE: `${API_BASE_URL}/user/profile`,
  USER_SETTINGS: `${API_BASE_URL}/user/settings`,
  
  // Services
  SERVICES_LIST: `${API_BASE_URL}/services`,
} as const;

export default API_ENDPOINTS;
