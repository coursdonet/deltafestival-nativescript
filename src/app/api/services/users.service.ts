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
class UsersService extends __BaseService {
  static readonly GetUsersPath = '/api/Users';
  static readonly GetUserPath = '/api/Users/{id}';
  static readonly PutUserPath = '/api/Users/{id}';
  static readonly DeleteUserPath = '/api/Users/{id}';
  static readonly LoginPath = '/api/Users/login/{TicketCode}';
  static readonly PostUserPath = '/api/Users/register';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetUsersResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetUsers(): __Observable<Array<User>> {
    return this.GetUsersResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetUserResponse(id: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Users/${id}`,
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
   * @param id undefined
   * @return Success
   */
  GetUser(id: number): __Observable<User> {
    return this.GetUserResponse(id).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param params The `UsersService.PutUserParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `user`:
   */
  PutUserResponse(params: UsersService.PutUserParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.user;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Users/${params.id}`,
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
   * @param params The `UsersService.PutUserParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `user`:
   */
  PutUser(params: UsersService.PutUserParams): __Observable<null> {
    return this.PutUserResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  DeleteUserResponse(id: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Users/${id}`,
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
   * @param id undefined
   * @return Success
   */
  DeleteUser(id: number): __Observable<User> {
    return this.DeleteUserResponse(id).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param TicketCode undefined
   * @return Success
   */
  LoginResponse(TicketCode: string): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Users/login/${TicketCode}`,
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
   * @param TicketCode undefined
   * @return Success
   */
  Login(TicketCode: string): __Observable<User> {
    return this.LoginResponse(TicketCode).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param user undefined
   * @return Success
   */
  PostUserResponse(user?: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Users/register`,
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
   * @param user undefined
   * @return Success
   */
  PostUser(user?: User): __Observable<User> {
    return this.PostUserResponse(user).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module UsersService {

  /**
   * Parameters for PutUser
   */
  export interface PutUserParams {
    id: number;
    user?: User;
  }
}

export { UsersService }
