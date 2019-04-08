/* tslint:disable */
import { User } from './user';
import { Concert } from './concert';
export interface UserConcert {
  id?: number;
  user?: User;
  userId?: number;
  concert?: Concert;
  concertId?: number;
}
