import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CommonService } from "./common/common.service";

@Injectable()

export class CoursesService extends CommonService {
    constructor(httpClient: HttpClient) {
        super(httpClient, 'https://localhost:44374/course');
    }
}