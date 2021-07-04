import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common/common.service";

@Injectable()

export class UserService extends CommonService {
    constructor(httpClient: HttpClient) {
        super(httpClient, 'https://jsonplaceholder.typicode.com/users');
    }
}