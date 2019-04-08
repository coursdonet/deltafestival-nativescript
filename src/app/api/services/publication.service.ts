/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Publication } from '../models/publication';
@Injectable({
  providedIn: 'root',
})
class PublicationService extends __BaseService {
  static readonly GetAllPath = '/api/Publication';
  static readonly PostPath = '/api/Publication';
  static readonly GetPath = '/api/Publication/{id}';
  static readonly PutPath = '/api/Publication/{id}';
  static readonly DeletePath = '/api/Publication/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetAllResponse(): __Observable<__StrictHttpResponse<Array<Publication>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Publication`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Publication>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetAll(): __Observable<Array<Publication>> {
    return this.GetAllResponse().pipe(
      __map(_r => _r.body as Array<Publication>)
    );
  }

  /**
   * @param publication undefined
   * @return Success
   */
  PostResponse(publication?: Publication): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = publication;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Publication`,
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
   * @param publication undefined
   * @return Success
   */
  Post(publication?: Publication): __Observable<boolean> {
    return this.PostResponse(publication).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetResponse(id: number): __Observable<__StrictHttpResponse<Publication>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Publication/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Publication>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  Get(id: number): __Observable<Publication> {
    return this.GetResponse(id).pipe(
      __map(_r => _r.body as Publication)
    );
  }

  /**
   * @param params The `PublicationService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `publication`:
   *
   * @return Success
   */
  PutResponse(params: PublicationService.PutParams): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.publication;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Publication/${params.id}`,
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
   * @param params The `PublicationService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `publication`:
   *
   * @return Success
   */
  Put(params: PublicationService.PutParams): __Observable<boolean> {
    return this.PutResponse(params).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  DeleteResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Publication/${id}`,
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
   * @param id undefined
   * @return Success
   */
  Delete(id: number): __Observable<boolean> {
    return this.DeleteResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }
}

module PublicationService {

  /**
   * Parameters for Put
   */
  export interface PutParams {
    id: string;
    publication?: Publication;
  }
}

export { PublicationService }
