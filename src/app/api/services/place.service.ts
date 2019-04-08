/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Place } from '../models/place';
@Injectable({
  providedIn: 'root',
})
class PlaceService extends __BaseService {
  static readonly GetPlaceItemsPath = '/api/Place';
  static readonly PostLocalizationPath = '/api/Place';
  static readonly GetPlaceItemPath = '/api/Place/{id}';
  static readonly PutPlacePath = '/api/Place/{id}';
  static readonly DeleteLocalizationPath = '/api/Place/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetPlaceItemsResponse(): __Observable<__StrictHttpResponse<Array<Place>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Place`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Place>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetPlaceItems(): __Observable<Array<Place>> {
    return this.GetPlaceItemsResponse().pipe(
      __map(_r => _r.body as Array<Place>)
    );
  }

  /**
   * @param Places undefined
   * @return Success
   */
  PostLocalizationResponse(Places?: Place): __Observable<__StrictHttpResponse<Place>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = Places;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Place`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Place>;
      })
    );
  }
  /**
   * @param Places undefined
   * @return Success
   */
  PostLocalization(Places?: Place): __Observable<Place> {
    return this.PostLocalizationResponse(Places).pipe(
      __map(_r => _r.body as Place)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetPlaceItemResponse(id: number): __Observable<__StrictHttpResponse<Place>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Place/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Place>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetPlaceItem(id: number): __Observable<Place> {
    return this.GetPlaceItemResponse(id).pipe(
      __map(_r => _r.body as Place)
    );
  }

  /**
   * @param params The `PlaceService.PutPlaceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `place`:
   */
  PutPlaceResponse(params: PlaceService.PutPlaceParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.place;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Place/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `PlaceService.PutPlaceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `place`:
   */
  PutPlace(params: PlaceService.PutPlaceParams): __Observable<null> {
    return this.PutPlaceResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  DeleteLocalizationResponse(id: number): __Observable<__StrictHttpResponse<Place>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Place/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Place>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  DeleteLocalization(id: number): __Observable<Place> {
    return this.DeleteLocalizationResponse(id).pipe(
      __map(_r => _r.body as Place)
    );
  }
}

module PlaceService {

  /**
   * Parameters for PutPlace
   */
  export interface PutPlaceParams {
    id: number;
    place?: Place;
  }
}

export { PlaceService }
