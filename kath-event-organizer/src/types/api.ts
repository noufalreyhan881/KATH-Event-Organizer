/**
 * API request and response types
 */

import type { ApiResponse, PaginatedResponse, AuthToken } from './common';
import type { User, Blog, Portfolio, Competition, Team } from './entity';

/**
 * Auth API responses
 */
export interface LoginResponse extends AuthToken {
  user: User;
}

export interface RegisterResponse extends AuthToken {
  user: User;
}

/**
 * Blog API responses
 */
export interface BlogListResponse extends PaginatedResponse<Blog> {}

export interface BlogDetailResponse extends ApiResponse<Blog> {}

export interface BlogCreateResponse extends ApiResponse<Blog> {}

export interface BlogUpdateResponse extends ApiResponse<Blog> {}

/**
 * Portfolio API responses
 */
export interface PortfolioListResponse extends PaginatedResponse<Portfolio> {}

export interface PortfolioDetailResponse extends ApiResponse<Portfolio> {}

/**
 * Competition API responses
 */
export interface CompetitionListResponse extends PaginatedResponse<Competition> {}

export interface CompetitionDetailResponse extends ApiResponse<Competition> {}

/**
 * Team API responses
 */
export interface TeamListResponse extends PaginatedResponse<Team> {}

export interface TeamDetailResponse extends ApiResponse<Team> {}

export interface TeamCreateResponse extends ApiResponse<Team> {}

export interface TeamUpdateResponse extends ApiResponse<Team> {}

/**
 * User API responses
 */
export interface UserProfileResponse extends ApiResponse<User> {}

export interface UserUpdateResponse extends ApiResponse<User> {}
