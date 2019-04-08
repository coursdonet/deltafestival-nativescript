/* tslint:disable */
import { User } from './user';
import { SuperUser } from './super-user';
export interface Publication {
  user?: User;
  id?: number;
  content: string;
  isCoupDeCoeur?: boolean;
  userId?: number;
  creationDate?: string;
  superUserId?: number;
  superUser?: SuperUser;
  file: string;
  date?: string;
  hashtag?: string;
}
