/**
 * Domain entity types
 */

import type { BaseEntity } from './common';

/**
 * User entity
 */
export interface User extends BaseEntity {
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  role: 'admin' | 'user';
  isActive: boolean;
}

/**
 * Blog entity
 */
export interface Blog extends BaseEntity {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  author: User;
  authorId: string;
  views: number;
  isPublished: boolean;
  publishedAt?: Date;
}

/**
 * Portfolio entity
 */
export interface Portfolio extends BaseEntity {
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link?: string;
  isPublished: boolean;
}

/**
 * Competition entity
 */
export interface Competition extends BaseEntity {
  name: string;
  description: string;
  image: string;
  startDate: Date;
  endDate: Date;
  registrationDeadline: Date;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  maxParticipants?: number;
  currentParticipants: number;
  isPublished: boolean;
}

/**
 * Team entity
 */
export interface Team extends BaseEntity {
  name: string;
  description: string;
  logo?: string;
  leaderId: string;
  leader: User;
  members: User[];
  memberCount: number;
  isActive: boolean;
}

/**
 * Team member entity (pivot table)
 */
export interface TeamMember extends BaseEntity {
  teamId: string;
  userId: string;
  user: User;
  role: 'leader' | 'member';
  joinedAt: Date;
}

/**
 * Participation entity (user/team in competition)
 */
export interface Participation extends BaseEntity {
  competitionId: string;
  userId?: string;
  teamId?: string;
  user?: User;
  team?: Team;
  status: 'registered' | 'participating' | 'disqualified' | 'completed';
  score?: number;
}

/**
 * Event/Service entity
 */
export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}
