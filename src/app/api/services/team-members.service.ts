/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TeamMembers } from '../models/team-members';
@Injectable({
  providedIn: 'root',
})
class TeamMembersService extends __BaseService {
  static readonly GetTeamMembersPath = '/api/TeamMembers';
  static readonly PostTeamMembersPath = '/api/TeamMembers';
  static readonly GetUserTeamPath = '/api/TeamMembers/{userId}';
  static readonly PutTeamMembersPath = '/api/TeamMembers/{id}';
  static readonly DeleteTeamMembersPath = '/api/TeamMembers/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetTeamMembersResponse(): __Observable<__StrictHttpResponse<Array<TeamMembers>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/TeamMembers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TeamMembers>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetTeamMembers(): __Observable<Array<TeamMembers>> {
    return this.GetTeamMembersResponse().pipe(
      __map(_r => _r.body as Array<TeamMembers>)
    );
  }

  /**
   * @param teamMembers undefined
   * @return Success
   */
  PostTeamMembersResponse(teamMembers?: TeamMembers): __Observable<__StrictHttpResponse<TeamMembers>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = teamMembers;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/TeamMembers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TeamMembers>;
      })
    );
  }
  /**
   * @param teamMembers undefined
   * @return Success
   */
  PostTeamMembers(teamMembers?: TeamMembers): __Observable<TeamMembers> {
    return this.PostTeamMembersResponse(teamMembers).pipe(
      __map(_r => _r.body as TeamMembers)
    );
  }

  /**
   * @param userId undefined
   * @return Success
   */
  GetUserTeamResponse(userId: number): __Observable<__StrictHttpResponse<TeamMembers>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/TeamMembers/${userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TeamMembers>;
      })
    );
  }
  /**
   * @param userId undefined
   * @return Success
   */
  GetUserTeam(userId: number): __Observable<TeamMembers> {
    return this.GetUserTeamResponse(userId).pipe(
      __map(_r => _r.body as TeamMembers)
    );
  }

  /**
   * @param params The `TeamMembersService.PutTeamMembersParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `teamMembers`:
   */
  PutTeamMembersResponse(params: TeamMembersService.PutTeamMembersParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.teamMembers;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/TeamMembers/${params.id}`,
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
   * @param params The `TeamMembersService.PutTeamMembersParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `teamMembers`:
   */
  PutTeamMembers(params: TeamMembersService.PutTeamMembersParams): __Observable<null> {
    return this.PutTeamMembersResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  DeleteTeamMembersResponse(id: number): __Observable<__StrictHttpResponse<TeamMembers>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/TeamMembers/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TeamMembers>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  DeleteTeamMembers(id: number): __Observable<TeamMembers> {
    return this.DeleteTeamMembersResponse(id).pipe(
      __map(_r => _r.body as TeamMembers)
    );
  }
}

module TeamMembersService {

  /**
   * Parameters for PutTeamMembers
   */
  export interface PutTeamMembersParams {
    id: number;
    teamMembers?: TeamMembers;
  }
}

export { TeamMembersService }
