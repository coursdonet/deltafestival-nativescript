/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://195.200.178.233:801';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
