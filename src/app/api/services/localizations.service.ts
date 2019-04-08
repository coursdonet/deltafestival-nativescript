/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Localization } from '../models/localization';
@Injectable({
  providedIn: 'root',
})
class LocalizationsService extends __BaseService {
  static readonly GetLocalizationsPath = '/api/Localizations';
  static readonly PostLocalizationPath = '/api/Localizations';
  static readonly GetLocalizationPath = '/api/Localizations/{id}';
  static readonly PutLocalizationPath = '/api/Localizations/{id}';
  static readonly DeleteLocalizationPath = '/api/Localizations/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetLocalizationsResponse(): __Observable<__StrictHttpResponse<Array<Localization>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Localizations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Localization>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetLocalizations(): __Observable<Array<Localization>> {
    return this.GetLocalizationsResponse().pipe(
      __map(_r => _r.body as Array<Localization>)
    );
  }

  /**
   * @param localization undefined
   * @return Success
   */
  PostLocalizationResponse(localization?: Localization): __Observable<__StrictHttpResponse<Localization>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = localization;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Localizations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Localization>;
      })
    );
  }
  /**
   * @param localization undefined
   * @return Success
   */
  PostLocalization(localization?: Localization): __Observable<Localization> {
    return this.PostLocalizationResponse(localization).pipe(
      __map(_r => _r.body as Localization)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetLocalizationResponse(id: string): __Observable<__StrictHttpResponse<Localization>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Localizations/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Localization>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetLocalization(id: string): __Observable<Localization> {
    return this.GetLocalizationResponse(id).pipe(
      __map(_r => _r.body as Localization)
    );
  }

  /**
   * @param params The `LocalizationsService.PutLocalizationParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `localization`:
   */
  PutLocalizationResponse(params: LocalizationsService.PutLocalizationParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.localization;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Localizations/${params.id}`,
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
   * @param params The `LocalizationsService.PutLocalizationParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `localization`:
   */
  PutLocalization(params: LocalizationsService.PutLocalizationParams): __Observable<null> {
    return this.PutLocalizationResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  DeleteLocalizationResponse(id: string): __Observable<__StrictHttpResponse<Localization>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Localizations/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Localization>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  DeleteLocalization(id: string): __Observable<Localization> {
    return this.DeleteLocalizationResponse(id).pipe(
      __map(_r => _r.body as Localization)
    );
  }
}

module LocalizationsService {

  /**
   * Parameters for PutLocalization
   */
  export interface PutLocalizationParams {
    id: string;
    localization?: Localization;
  }
}

export { LocalizationsService }
