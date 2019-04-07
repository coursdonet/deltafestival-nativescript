/* tslint:disable */
import { Team } from './team';
export interface UserValidatedCheckpoints {
  id?: number;
  userId?: number;
  checkpointId?: number;
  timeChecked?: string;
  teamId?: number;
  team?: Team;
}
