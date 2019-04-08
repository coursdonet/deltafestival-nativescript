import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ConfigureService {
    constructor(private http: HttpClient) {

    }
}
