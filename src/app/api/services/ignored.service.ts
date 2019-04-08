/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Ignored } from '../models/ignored';
@Injectable({
  providedIn: 'root',
})
class IgnoredService extends __BaseService {
  static readonly GetPath = '/api/Ignored/{idCurrentUser}/{idIgnored}';
  static readonly GetIgnoredByUserPath = '/api/Ignored/{idCurrentUser}';
  static readonly PostPath = '/api/Ignored';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `IgnoredService.GetParams` containing the following parameters:
   *
   * - `idIgnored`:
   *
   * - `idCurrentUser`:
   *
   * @return Success
   */
  GetResponse(params: IgnoredService.GetParams): __Observable<__StrictHttpResponse<Ignored>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Ignored/${params.idCurrentUser}/${params.idIgnored}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Ignored>;
      })
    );
  }
  /**
   * @param params The `IgnoredService.GetParams` containing the following parameters:
   *
   * - `idIgnored`:
   *
   * - `idCurrentUser`:
   *
   * @return Success
   */
  Get(params: IgnoredService.GetParams): __Observable<Ignored> {
    return this.GetResponse(params).pipe(
      __map(_r => _r.body as Ignored)
    );
  }

  /**
   * @param idCurrentUser undefined
   * @return Success
   */
  GetIgnoredByUserResponse(idCurrentUser: number): __Observable<__StrictHttpResponse<Array<Ignored>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Ignored/${idCurrentUser}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Ignored>>;
      })
    );
  }
  /**
   * @param idCurrentUser undefined
   * @return Success
   */
  GetIgnoredByUser(idCurrentUser: number): __Observable<Array<Ignored>> {
    return this.GetIgnoredByUserResponse(idCurrentUser).pipe(
      __map(_r => _r.body as Array<Ignored>)
    );
  }

  /**
   * @param params The `IgnoredService.PostParams` containing the following parameters:
   *
   * - `idCurrentUser`:
   *
   * - `idCrush`:
   */
  PostResponse(params: IgnoredService.PostParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idCurrentUser != null) __params = __params.set('idCurrentUser', params.idCurrentUser.toString());
    if (params.idCrush != null) __params = __params.set('idCrush', params.idCrush.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Ignored`,
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
   * @param params The `IgnoredService.PostParams` containing the following parameters:
   *
   * - `idCurrentUser`:
   *
   * - `idCrush`:
   */
  Post(params: IgnoredService.PostParams): __Observable<null> {
    return this.PostResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module IgnoredService {

  /**
   * Parameters for Get
   */
  export interface GetParams {
    idIgnored: number;
    idCurrentUser: number;
  }

  /**
   * Parameters for Post
   */
  export interface PostParams {
    idCurrentUser?: number;
    idCrush?: number;
  }
}

export { IgnoredService }
