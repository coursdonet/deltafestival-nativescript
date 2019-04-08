/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Zone } from '../models/zone';
@Injectable({
  providedIn: 'root',
})
class ZoneService extends __BaseService {
  static readonly GetZonesPath = '/api/Zone';
  static readonly PostZonePath = '/api/Zone';
  static readonly GetZones_1Path = '/api/Zone/{id}';
  static readonly DeleteZonePath = '/api/Zone/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetZonesResponse(): __Observable<__StrictHttpResponse<Array<Zone>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Zone`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Zone>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetZones(): __Observable<Array<Zone>> {
    return this.GetZonesResponse().pipe(
      __map(_r => _r.body as Array<Zone>)
    );
  }

  /**
   * @param zone undefined
   * @return Success
   */
  PostZoneResponse(zone?: Zone): __Observable<__StrictHttpResponse<Zone>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = zone;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Zone`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Zone>;
      })
    );
  }
  /**
   * @param zone undefined
   * @return Success
   */
  PostZone(zone?: Zone): __Observable<Zone> {
    return this.PostZoneResponse(zone).pipe(
      __map(_r => _r.body as Zone)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetZones_1Response(id: number): __Observable<__StrictHttpResponse<Zone>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Zone/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Zone>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetZones_1(id: number): __Observable<Zone> {
    return this.GetZones_1Response(id).pipe(
      __map(_r => _r.body as Zone)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  DeleteZoneResponse(id: number): __Observable<__StrictHttpResponse<Zone>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Zone/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Zone>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  DeleteZone(id: number): __Observable<Zone> {
    return this.DeleteZoneResponse(id).pipe(
      __map(_r => _r.body as Zone)
    );
  }
}

module ZoneService {
}

export { ZoneService }
