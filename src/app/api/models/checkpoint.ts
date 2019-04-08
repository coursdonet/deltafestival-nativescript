/* tslint:disable */
export interface Checkpoint {
  id?: number;
  longitude?: number;
  latitude?: number;
  name?: string;
  lastDisabled?: string;
  isObsolete?: boolean;
  isActive?: boolean;
  areaOfAction?: number;
  isDiscovered?: boolean;
  isTeamChecked?: boolean;
}
