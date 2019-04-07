/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class RankingService extends __BaseService {
  static readonly RankingBetweenTeamPath = '/api/Ranking/{id}';
  static readonly RankingPath = '/api/Ranking';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `RankingService.RankingBetweenTeamParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `count`:
   */
  RankingBetweenTeamResponse(params: RankingService.RankingBetweenTeamParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.count;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Ranking/${params.id}`,
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
   * @param params The `RankingService.RankingBetweenTeamParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `count`:
   */
  RankingBetweenTeam(params: RankingService.RankingBetweenTeamParams): __Observable<null> {
    return this.RankingBetweenTeamResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
  RankingResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Ranking`,
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
  }  Ranking(): __Observable<null> {
    return this.RankingResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module RankingService {

  /**
   * Parameters for RankingBetweenTeam
   */
  export interface RankingBetweenTeamParams {
    id: number;
    count?: number;
  }
}

export { RankingService }
