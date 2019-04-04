/* tslint:disable */
import { Mood } from './mood';
import { UserRole } from './user-role';
import { Publication } from './publication';
export interface User {
  actualMood?: Mood;
  id?: number;
  userRoleId?: number;
  role?: UserRole;
  moodId?: number;
  userName?: string;
  publications?: Array<Publication>;
  ticketCode?: string;
  canPublish?: boolean;
  demission?: number;
  isActive?: boolean;
}
