/* tslint:disable */
import { UserRole } from './user-role';
export interface SuperUser {
  id?: number;
  nickName: string;
  isActive: boolean;
  canPublish: boolean;
  resign?: number;
  userRoleId?: number;
  userRole?: UserRole;
}
