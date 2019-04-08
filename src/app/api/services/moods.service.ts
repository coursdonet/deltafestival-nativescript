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
class MoodsService extends __BaseService {
  static readonly GetMoodPath = '/api/Moods';
  static readonly PostMoodPath = '/api/Moods';
  static readonly GetMood_1Path = '/api/Moods/{id}';
  static readonly PutMoodPath = '/api/Moods/{id}';
  static readonly DeleteMoodPath = '/api/Moods/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetMoodResponse(): __Observable<__StrictHttpResponse<Array<Mood>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Moods`,
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
  GetMood(): __Observable<Array<Mood>> {
    return this.GetMoodResponse().pipe(
      __map(_r => _r.body as Array<Mood>)
    );
  }

  /**
   * @param mood undefined
   * @return Success
   */
  PostMoodResponse(mood?: Mood): __Observable<__StrictHttpResponse<Mood>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = mood;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Moods`,
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
   * @param mood undefined
   * @return Success
   */
  PostMood(mood?: Mood): __Observable<Mood> {
    return this.PostMoodResponse(mood).pipe(
      __map(_r => _r.body as Mood)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetMood_1Response(id: number): __Observable<__StrictHttpResponse<Mood>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Moods/${id}`,
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
  GetMood_1(id: number): __Observable<Mood> {
    return this.GetMood_1Response(id).pipe(
      __map(_r => _r.body as Mood)
    );
  }

  /**
   * @param params The `MoodsService.PutMoodParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `mood`:
   */
  PutMoodResponse(params: MoodsService.PutMoodParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.mood;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Moods/${params.id}`,
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
   * @param params The `MoodsService.PutMoodParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `mood`:
   */
  PutMood(params: MoodsService.PutMoodParams): __Observable<null> {
    return this.PutMoodResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  DeleteMoodResponse(id: number): __Observable<__StrictHttpResponse<Mood>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Moods/${id}`,
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
  DeleteMood(id: number): __Observable<Mood> {
    return this.DeleteMoodResponse(id).pipe(
      __map(_r => _r.body as Mood)
    );
  }
}

module MoodsService {

  /**
   * Parameters for PutMood
   */
  export interface PutMoodParams {
    id: number;
    mood?: Mood;
  }
}

export { MoodsService }
