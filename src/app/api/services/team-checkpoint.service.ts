/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TeamCheckpoints } from '../models/team-checkpoints';
@Injectable({
  providedIn: 'root',
})
class TeamCheckpointService extends __BaseService {
  static readonly GetTeamCheckpointPath = '/api/TeamCheckpoint';
  static readonly PostTeamCheckpointPath = '/api/TeamCheckpoint';
  static readonly GetTeamCheckpoint_1Path = '/api/TeamCheckpoint/teamId/{TeamId}';
  static readonly GetTeamCheckpointByIdPath = '/api/TeamCheckpoint/{Id}';
  static readonly PutTeamCheckpointPath = '/api/TeamCheckpoint/{id}';
  static readonly DeleteTeamCheckpointPath = '/api/TeamCheckpoint/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetTeamCheckpointResponse(): __Observable<__StrictHttpResponse<Array<TeamCheckpoints>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/TeamCheckpoint`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TeamCheckpoints>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetTeamCheckpoint(): __Observable<Array<TeamCheckpoints>> {
    return this.GetTeamCheckpointResponse().pipe(
      __map(_r => _r.body as Array<TeamCheckpoints>)
    );
  }

  /**
   * @param item undefined
   * @return Success
   */
  PostTeamCheckpointResponse(item?: TeamCheckpoints): __Observable<__StrictHttpResponse<TeamCheckpoints>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = item;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/TeamCheckpoint`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TeamCheckpoints>;
      })
    );
  }
  /**
   * @param item undefined
   * @return Success
   */
  PostTeamCheckpoint(item?: TeamCheckpoints): __Observable<TeamCheckpoints> {
    return this.PostTeamCheckpointResponse(item).pipe(
      __map(_r => _r.body as TeamCheckpoints)
    );
  }

  /**
   * @param TeamId undefined
   * @return Success
   */
  GetTeamCheckpoint_1Response(TeamId: number): __Observable<__StrictHttpResponse<Array<TeamCheckpoints>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/TeamCheckpoint/teamId/${TeamId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TeamCheckpoints>>;
      })
    );
  }
  /**
   * @param TeamId undefined
   * @return Success
   */
  GetTeamCheckpoint_1(TeamId: number): __Observable<Array<TeamCheckpoints>> {
    return this.GetTeamCheckpoint_1Response(TeamId).pipe(
      __map(_r => _r.body as Array<TeamCheckpoints>)
    );
  }

  /**
   * @param Id undefined
   * @return Success
   */
  GetTeamCheckpointByIdResponse(Id: number): __Observable<__StrictHttpResponse<TeamCheckpoints>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/TeamCheckpoint/${Id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TeamCheckpoints>;
      })
    );
  }
  /**
   * @param Id undefined
   * @return Success
   */
  GetTeamCheckpointById(Id: number): __Observable<TeamCheckpoints> {
    return this.GetTeamCheckpointByIdResponse(Id).pipe(
      __map(_r => _r.body as TeamCheckpoints)
    );
  }

  /**
   * @param params The `TeamCheckpointService.PutTeamCheckpointParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `item`:
   */
  PutTeamCheckpointResponse(params: TeamCheckpointService.PutTeamCheckpointParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.item;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/TeamCheckpoint/${params.id}`,
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
   * @param params The `TeamCheckpointService.PutTeamCheckpointParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `item`:
   */
  PutTeamCheckpoint(params: TeamCheckpointService.PutTeamCheckpointParams): __Observable<null> {
    return this.PutTeamCheckpointResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  DeleteTeamCheckpointResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/TeamCheckpoint/${id}`,
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
  DeleteTeamCheckpoint(id: number): __Observable<null> {
    return this.DeleteTeamCheckpointResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module TeamCheckpointService {

  /**
   * Parameters for PutTeamCheckpoint
   */
  export interface PutTeamCheckpointParams {
    id: number;
    item?: TeamCheckpoints;
  }
}

export { TeamCheckpointService }
