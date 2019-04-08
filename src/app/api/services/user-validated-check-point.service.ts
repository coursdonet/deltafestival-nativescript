/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserValidatedCheckpoints } from '../models/user-validated-checkpoints';
@Injectable({
  providedIn: 'root',
})
class UserValidatedCheckPointService extends __BaseService {
  static readonly GetUserValidatedCheckpointsItemsPath = '/api/UserValidatedCheckPoint';
  static readonly PostUserValidatedCheckpointPath = '/api/UserValidatedCheckPoint';
  static readonly GetUserValidatedCheckpointsItemPath = '/api/UserValidatedCheckPoint/{UserId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetUserValidatedCheckpointsItemsResponse(): __Observable<__StrictHttpResponse<Array<UserValidatedCheckpoints>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/UserValidatedCheckPoint`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserValidatedCheckpoints>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetUserValidatedCheckpointsItems(): __Observable<Array<UserValidatedCheckpoints>> {
    return this.GetUserValidatedCheckpointsItemsResponse().pipe(
      __map(_r => _r.body as Array<UserValidatedCheckpoints>)
    );
  }

  /**
   * @param item undefined
   * @return Success
   */
  PostUserValidatedCheckpointResponse(item?: UserValidatedCheckpoints): __Observable<__StrictHttpResponse<UserValidatedCheckpoints>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = item;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/UserValidatedCheckPoint`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserValidatedCheckpoints>;
      })
    );
  }
  /**
   * @param item undefined
   * @return Success
   */
  PostUserValidatedCheckpoint(item?: UserValidatedCheckpoints): __Observable<UserValidatedCheckpoints> {
    return this.PostUserValidatedCheckpointResponse(item).pipe(
      __map(_r => _r.body as UserValidatedCheckpoints)
    );
  }

  /**
   * @param UserId undefined
   * @return Success
   */
  GetUserValidatedCheckpointsItemResponse(UserId: number): __Observable<__StrictHttpResponse<Array<UserValidatedCheckpoints>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/UserValidatedCheckPoint/${UserId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserValidatedCheckpoints>>;
      })
    );
  }
  /**
   * @param UserId undefined
   * @return Success
   */
  GetUserValidatedCheckpointsItem(UserId: number): __Observable<Array<UserValidatedCheckpoints>> {
    return this.GetUserValidatedCheckpointsItemResponse(UserId).pipe(
      __map(_r => _r.body as Array<UserValidatedCheckpoints>)
    );
  }
}

module UserValidatedCheckPointService {
}

export { UserValidatedCheckPointService }
