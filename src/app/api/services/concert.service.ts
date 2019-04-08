/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Concert } from '../models/concert';
@Injectable({
  providedIn: 'root',
})
class ConcertService extends __BaseService {
  static readonly GetConcertsItemsPath = '/api/Concert/user={userId}';
  static readonly GetConcertItemPath = '/api/Concert/{id}';
  static readonly PutConcertItemPath = '/api/Concert/{id}';
  static readonly DeleteConcertItemPath = '/api/Concert/{id}';
  static readonly PostConcertItemPath = '/api/Concert';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param userId undefined
   * @return Success
   */
  GetConcertsItemsResponse(userId: number): __Observable<__StrictHttpResponse<Array<Concert>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Concert/user=${userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Concert>>;
      })
    );
  }
  /**
   * @param userId undefined
   * @return Success
   */
  GetConcertsItems(userId: number): __Observable<Array<Concert>> {
    return this.GetConcertsItemsResponse(userId).pipe(
      __map(_r => _r.body as Array<Concert>)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetConcertItemResponse(id: number): __Observable<__StrictHttpResponse<Concert>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Concert/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Concert>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetConcertItem(id: number): __Observable<Concert> {
    return this.GetConcertItemResponse(id).pipe(
      __map(_r => _r.body as Concert)
    );
  }

  /**
   * @param params The `ConcertService.PutConcertItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `item`:
   */
  PutConcertItemResponse(params: ConcertService.PutConcertItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.item;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Concert/${params.id}`,
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
   * @param params The `ConcertService.PutConcertItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `item`:
   */
  PutConcertItem(params: ConcertService.PutConcertItemParams): __Observable<null> {
    return this.PutConcertItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  DeleteConcertItemResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Concert/${id}`,
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
  DeleteConcertItem(id: number): __Observable<null> {
    return this.DeleteConcertItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param item undefined
   * @return Success
   */
  PostConcertItemResponse(item?: Concert): __Observable<__StrictHttpResponse<Concert>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = item;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Concert`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Concert>;
      })
    );
  }
  /**
   * @param item undefined
   * @return Success
   */
  PostConcertItem(item?: Concert): __Observable<Concert> {
    return this.PostConcertItemResponse(item).pipe(
      __map(_r => _r.body as Concert)
    );
  }
}

module ConcertService {

  /**
   * Parameters for PutConcertItem
   */
  export interface PutConcertItemParams {
    id: number;
    item?: Concert;
  }
}

export { ConcertService }
