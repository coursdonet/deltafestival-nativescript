/* tslint:disable */
import { ConcertLocation } from './concert-location';
export interface Concert {
  id?: number;
  artist?: string;
  hour?: string;
  duration?: number;
  concertLocation?: ConcertLocation;
  concertLocationId?: number;
}
