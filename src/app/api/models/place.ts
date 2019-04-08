/* tslint:disable */
import { PlaceCategory } from './place-category';
export interface Place {
  id?: number;
  name?: string;
  categoryId?: number;
  category?: PlaceCategory;
  lat?: number;
  longi?: number;
}
