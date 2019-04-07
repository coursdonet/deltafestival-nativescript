/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Crush } from '../models/crush';
@Injectable({
  providedIn: 'root',
})
class CrushService extends __BaseService {
  static readonly GetPath = '/api/Crush/{idCurrentUser}/{idCrush}';
  static readonly GetCrushesByUserPath = '/api/Crush/{idCurrentUser}';
  static readonly IsDoubleCrushPath = '/api/Crush';
  static readonly PostPath = '/api/Crush';
  static readonly DeletePath = '/api/Crush/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `CrushService.GetParams` containing the following parameters:
   *
   * - `idCurrentUser`:
   *
   * - `idCrush`:
   *
   * @return Success
   */
  GetResponse(params: CrushService.GetParams): __Observable<__StrictHttpResponse<Crush>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Crush/${params.idCurrentUser}/${params.idCrush}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Crush>;
      })
    );
  }
  /**
   * @param params The `CrushService.GetParams` containing the following parameters:
   *
   * - `idCurrentUser`:
   *
   * - `idCrush`:
   *
   * @return Success
   */
  Get(params: CrushService.GetParams): __Observable<Crush> {
    return this.GetResponse(params).pipe(
      __map(_r => _r.body as Crush)
    );
  }

  /**
   * @param idCurrentUser undefined
   * @return Success
   */
  GetCrushesByUserResponse(idCurrentUser: number): __Observable<__StrictHttpResponse<Array<Crush>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Crush/${idCurrentUser}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Crush>>;
      })
    );
  }
  /**
   * @param idCurrentUser undefined
   * @return Success
   */
  GetCrushesByUser(idCurrentUser: number): __Observable<Array<Crush>> {
    return this.GetCrushesByUserResponse(idCurrentUser).pipe(
      __map(_r => _r.body as Array<Crush>)
    );
  }

  /**
   * @param params The `CrushService.IsDoubleCrushParams` containing the following parameters:
   *
   * - `idCurrentUser`:
   *
   * - `idCrush`:
   *
   * @return Success
   */
  IsDoubleCrushResponse(params: CrushService.IsDoubleCrushParams): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idCurrentUser != null) __params = __params.set('idCurrentUser', params.idCurrentUser.toString());
    if (params.idCrush != null) __params = __params.set('idCrush', params.idCrush.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Crush`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param params The `CrushService.IsDoubleCrushParams` containing the following parameters:
   *
   * - `idCurrentUser`:
   *
   * - `idCrush`:
   *
   * @return Success
   */
  IsDoubleCrush(params: CrushService.IsDoubleCrushParams): __Observable<boolean> {
    return this.IsDoubleCrushResponse(params).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param params The `CrushService.PostParams` containing the following parameters:
   *
   * - `idCurrentUser`:
   *
   * - `idCrush`:
   */
  PostResponse(params: CrushService.PostParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idCurrentUser != null) __params = __params.set('idCurrentUser', params.idCurrentUser.toString());
    if (params.idCrush != null) __params = __params.set('idCrush', params.idCrush.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Crush`,
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
   * @param params The `CrushService.PostParams` containing the following parameters:
   *
   * - `idCurrentUser`:
   *
   * - `idCrush`:
   */
  Post(params: CrushService.PostParams): __Observable<null> {
    return this.PostResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CrushService.DeleteParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `idCurrentUser`:
   *
   * - `idCrush`:
   */
  DeleteResponse(params: CrushService.DeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.idCurrentUser != null) __params = __params.set('idCurrentUser', params.idCurrentUser.toString());
    if (params.idCrush != null) __params = __params.set('idCrush', params.idCrush.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Crush/${params.id}`,
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
   * @param params The `CrushService.DeleteParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `idCurrentUser`:
   *
   * - `idCrush`:
   */
  Delete(params: CrushService.DeleteParams): __Observable<null> {
    return this.DeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CrushService {

  /**
   * Parameters for Get
   */
  export interface GetParams {
    idCurrentUser: number;
    idCrush: number;
  }

  /**
   * Parameters for IsDoubleCrush
   */
  export interface IsDoubleCrushParams {
    idCurrentUser?: number;
    idCrush?: number;
  }

  /**
   * Parameters for Post
   */
  export interface PostParams {
    idCurrentUser?: number;
    idCrush?: number;
  }

  /**
   * Parameters for Delete
   */
  export interface DeleteParams {
    id: string;
    idCurrentUser?: number;
    idCrush?: number;
  }
}

export { CrushService }
