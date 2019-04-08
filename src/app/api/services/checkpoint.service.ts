/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Checkpoint } from '../models/checkpoint';
@Injectable({
  providedIn: 'root',
})
class CheckpointService extends __BaseService {
  static readonly GetCheckpointsItemsPath = '/api/Checkpoint';
  static readonly PostCheckpointItemPath = '/api/Checkpoint';
  static readonly GetCheckpointItemPath = '/api/Checkpoint/{id}';
  static readonly PutCheckpointItemPath = '/api/Checkpoint/{id}';
  static readonly DeleteCheckpointItemPath = '/api/Checkpoint/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetCheckpointsItemsResponse(): __Observable<__StrictHttpResponse<Array<Checkpoint>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Checkpoint`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Checkpoint>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetCheckpointsItems(): __Observable<Array<Checkpoint>> {
    return this.GetCheckpointsItemsResponse().pipe(
      __map(_r => _r.body as Array<Checkpoint>)
    );
  }

  /**
   * @param item undefined
   * @return Success
   */
  PostCheckpointItemResponse(item?: Checkpoint): __Observable<__StrictHttpResponse<Checkpoint>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = item;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Checkpoint`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Checkpoint>;
      })
    );
  }
  /**
   * @param item undefined
   * @return Success
   */
  PostCheckpointItem(item?: Checkpoint): __Observable<Checkpoint> {
    return this.PostCheckpointItemResponse(item).pipe(
      __map(_r => _r.body as Checkpoint)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetCheckpointItemResponse(id: number): __Observable<__StrictHttpResponse<Checkpoint>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Checkpoint/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Checkpoint>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetCheckpointItem(id: number): __Observable<Checkpoint> {
    return this.GetCheckpointItemResponse(id).pipe(
      __map(_r => _r.body as Checkpoint)
    );
  }

  /**
   * @param params The `CheckpointService.PutCheckpointItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `item`:
   */
  PutCheckpointItemResponse(params: CheckpointService.PutCheckpointItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.item;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Checkpoint/${params.id}`,
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
   * @param params The `CheckpointService.PutCheckpointItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `item`:
   */
  PutCheckpointItem(params: CheckpointService.PutCheckpointItemParams): __Observable<null> {
    return this.PutCheckpointItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  DeleteCheckpointItemResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Checkpoint/${id}`,
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
  DeleteCheckpointItem(id: number): __Observable<null> {
    return this.DeleteCheckpointItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CheckpointService {

  /**
   * Parameters for PutCheckpointItem
   */
  export interface PutCheckpointItemParams {
    id: number;
    item?: Checkpoint;
  }
}

export { CheckpointService }
