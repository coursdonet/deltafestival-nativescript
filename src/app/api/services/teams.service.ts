/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Team } from '../models/team';
@Injectable({
  providedIn: 'root',
})
class TeamsService extends __BaseService {
  static readonly GetTeamPath = '/api/Teams';
  static readonly PostTeamPath = '/api/Teams';
  static readonly GetTeamByIdPath = '/api/Teams/{id}';
  static readonly PutTeamPath = '/api/Teams/{id}';
  static readonly DeleteTeamPath = '/api/Teams/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetTeamResponse(): __Observable<__StrictHttpResponse<Array<Team>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Teams`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Team>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetTeam(): __Observable<Array<Team>> {
    return this.GetTeamResponse().pipe(
      __map(_r => _r.body as Array<Team>)
    );
  }

  /**
   * @param team undefined
   * @return Success
   */
  PostTeamResponse(team?: Team): __Observable<__StrictHttpResponse<Team>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = team;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Teams`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Team>;
      })
    );
  }
  /**
   * @param team undefined
   * @return Success
   */
  PostTeam(team?: Team): __Observable<Team> {
    return this.PostTeamResponse(team).pipe(
      __map(_r => _r.body as Team)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetTeamByIdResponse(id: number): __Observable<__StrictHttpResponse<Team>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Teams/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Team>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetTeamById(id: number): __Observable<Team> {
    return this.GetTeamByIdResponse(id).pipe(
      __map(_r => _r.body as Team)
    );
  }

  /**
   * @param params The `TeamsService.PutTeamParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `team`:
   */
  PutTeamResponse(params: TeamsService.PutTeamParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.team;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Teams/${params.id}`,
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
   * @param params The `TeamsService.PutTeamParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `team`:
   */
  PutTeam(params: TeamsService.PutTeamParams): __Observable<null> {
    return this.PutTeamResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  DeleteTeamResponse(id: number): __Observable<__StrictHttpResponse<Team>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Teams/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Team>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  DeleteTeam(id: number): __Observable<Team> {
    return this.DeleteTeamResponse(id).pipe(
      __map(_r => _r.body as Team)
    );
  }
}

module TeamsService {

  /**
   * Parameters for PutTeam
   */
  export interface PutTeamParams {
    id: number;
    team?: Team;
  }
}

export { TeamsService }
