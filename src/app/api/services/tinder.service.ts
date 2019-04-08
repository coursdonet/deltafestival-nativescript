/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
class TinderService extends __BaseService {
  static readonly GetRandomUserPath = '/api/Tinder';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param idCurrentUser undefined
   * @return Success
   */
  GetRandomUserResponse(idCurrentUser?: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (idCurrentUser != null) __params = __params.set('idCurrentUser', idCurrentUser.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Tinder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param idCurrentUser undefined
   * @return Success
   */
  GetRandomUser(idCurrentUser?: number): __Observable<User> {
    return this.GetRandomUserResponse(idCurrentUser).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module TinderService {
}

export { TinderService }
