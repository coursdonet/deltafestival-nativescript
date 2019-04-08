/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Mood } from '../models/mood';
@Injectable({
  providedIn: 'root',
})
class MoodService extends __BaseService {
  static readonly GetAllPath = '/api/Mood';
  static readonly PostPath = '/api/Mood';
  static readonly GetPath = '/api/Mood/{id}';
  static readonly PutPath = '/api/Mood/{id}';
  static readonly DeletePath = '/api/Mood/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetAllResponse(): __Observable<__StrictHttpResponse<Array<Mood>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Mood`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Mood>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetAll(): __Observable<Array<Mood>> {
    return this.GetAllResponse().pipe(
      __map(_r => _r.body as Array<Mood>)
    );
  }

  /**
   * @param mood undefined
   * @return Success
   */
  PostResponse(mood?: Mood): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = mood;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Mood`,
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
   * @param mood undefined
   * @return Success
   */
  Post(mood?: Mood): __Observable<boolean> {
    return this.PostResponse(mood).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetResponse(id: number): __Observable<__StrictHttpResponse<Mood>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Mood/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Mood>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  Get(id: number): __Observable<Mood> {
    return this.GetResponse(id).pipe(
      __map(_r => _r.body as Mood)
    );
  }

  /**
   * @param params The `MoodService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `mood`:
   *
   * @return Success
   */
  PutResponse(params: MoodService.PutParams): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.mood;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Mood/${params.id}`,
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
   * @param params The `MoodService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `mood`:
   *
   * @return Success
   */
  Put(params: MoodService.PutParams): __Observable<boolean> {
    return this.PutResponse(params).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   */
  DeleteResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Mood/${id}`,
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
  Delete(id: number): __Observable<null> {
    return this.DeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module MoodService {

  /**
   * Parameters for Put
   */
  export interface PutParams {
    id: string;
    mood?: Mood;
  }
}

export { MoodService }
