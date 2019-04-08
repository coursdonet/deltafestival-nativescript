/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserConcert } from '../models/user-concert';
@Injectable({
  providedIn: 'root',
})
class UserConcertService extends __BaseService {
  static readonly GetUserConcertsItemsPath = '/api/UserConcert';
  static readonly PostUserConcertItemPath = '/api/UserConcert';
  static readonly GetUserConcertsByIdPath = '/api/UserConcert/{userId}';
  static readonly DeleteUserConcertItemPath = '/api/UserConcert/{concertId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetUserConcertsItemsResponse(): __Observable<__StrictHttpResponse<Array<UserConcert>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/UserConcert`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserConcert>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetUserConcertsItems(): __Observable<Array<UserConcert>> {
    return this.GetUserConcertsItemsResponse().pipe(
      __map(_r => _r.body as Array<UserConcert>)
    );
  }

  /**
   * @param item undefined
   * @return Success
   */
  PostUserConcertItemResponse(item?: UserConcert): __Observable<__StrictHttpResponse<Array<UserConcert>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = item;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/UserConcert`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserConcert>>;
      })
    );
  }
  /**
   * @param item undefined
   * @return Success
   */
  PostUserConcertItem(item?: UserConcert): __Observable<Array<UserConcert>> {
    return this.PostUserConcertItemResponse(item).pipe(
      __map(_r => _r.body as Array<UserConcert>)
    );
  }

  /**
   * @param userId undefined
   * @return Success
   */
  GetUserConcertsByIdResponse(userId: number): __Observable<__StrictHttpResponse<Array<UserConcert>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/UserConcert/${userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserConcert>>;
      })
    );
  }
  /**
   * @param userId undefined
   * @return Success
   */
  GetUserConcertsById(userId: number): __Observable<Array<UserConcert>> {
    return this.GetUserConcertsByIdResponse(userId).pipe(
      __map(_r => _r.body as Array<UserConcert>)
    );
  }

  /**
   * @param params The `UserConcertService.DeleteUserConcertItemParams` containing the following parameters:
   *
   * - `concertId`:
   *
   * - `userId`:
   */
  DeleteUserConcertItemResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/UserConcert/${id}`,
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
   * @param params The `UserConcertService.DeleteUserConcertItemParams` containing the following parameters:
   *
   * - `concertId`:
   *
   * - `userId`:
   */
  DeleteUserConcertItem(id: number): __Observable<null> {
    return this.DeleteUserConcertItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserConcertService {

  /**
   * Parameters for DeleteUserConcertItem
   */
  export interface DeleteUserConcertItemParams {
    concertId: number;
    userId?: number;
  }
}

export { UserConcertService }
