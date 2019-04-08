/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ConcertLocation } from '../models/concert-location';
@Injectable({
  providedIn: 'root',
})
class ConcertLocationService extends __BaseService {
  static readonly GetConcertLocationsItemsPath = '/api/ConcertLocation';
  static readonly PostConcertLocationItemPath = '/api/ConcertLocation';
  static readonly GetConcertLocationItemPath = '/api/ConcertLocation/{id}';
  static readonly PutConcertLocationItemPath = '/api/ConcertLocation/{id}';
  static readonly DeleteConcertLocationItemPath = '/api/ConcertLocation/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetConcertLocationsItemsResponse(): __Observable<__StrictHttpResponse<Array<ConcertLocation>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ConcertLocation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ConcertLocation>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetConcertLocationsItems(): __Observable<Array<ConcertLocation>> {
    return this.GetConcertLocationsItemsResponse().pipe(
      __map(_r => _r.body as Array<ConcertLocation>)
    );
  }

  /**
   * @param item undefined
   * @return Success
   */
  PostConcertLocationItemResponse(item?: ConcertLocation): __Observable<__StrictHttpResponse<ConcertLocation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = item;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/ConcertLocation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ConcertLocation>;
      })
    );
  }
  /**
   * @param item undefined
   * @return Success
   */
  PostConcertLocationItem(item?: ConcertLocation): __Observable<ConcertLocation> {
    return this.PostConcertLocationItemResponse(item).pipe(
      __map(_r => _r.body as ConcertLocation)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetConcertLocationItemResponse(id: number): __Observable<__StrictHttpResponse<ConcertLocation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ConcertLocation/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ConcertLocation>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetConcertLocationItem(id: number): __Observable<ConcertLocation> {
    return this.GetConcertLocationItemResponse(id).pipe(
      __map(_r => _r.body as ConcertLocation)
    );
  }

  /**
   * @param params The `ConcertLocationService.PutConcertLocationItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `item`:
   */
  PutConcertLocationItemResponse(params: ConcertLocationService.PutConcertLocationItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.item;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/ConcertLocation/${params.id}`,
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
   * @param params The `ConcertLocationService.PutConcertLocationItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `item`:
   */
  PutConcertLocationItem(params: ConcertLocationService.PutConcertLocationItemParams): __Observable<null> {
    return this.PutConcertLocationItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  DeleteConcertLocationItemResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/ConcertLocation/${id}`,
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
   * @param id undefined
   */
  DeleteConcertLocationItem(id: number): __Observable<null> {
    return this.DeleteConcertLocationItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ConcertLocationService {

  /**
   * Parameters for PutConcertLocationItem
   */
  export interface PutConcertLocationItemParams {
    id: number;
    item?: ConcertLocation;
  }
}

export { ConcertLocationService }
