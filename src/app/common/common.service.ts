import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators'
import { throwError } from "rxjs";
import { NotFoundError } from "./notfound-error";
import { BadInputError } from "./badinput-error";
import { AppError } from "./app-error";

@Injectable()

export class CommonService {
    constructor(private httpClient: HttpClient, private requestUrl: string) {

    }
    getAll() {
        return this.httpClient.get(this.requestUrl)
            .pipe(catchError(this.handleError));
    }
    create(resource: any) {
        return this.httpClient.post(this.requestUrl, resource)
            .pipe(catchError(this.handleError));
    }
    update(resource) {
        //entire object update
        return this.httpClient.put(this.requestUrl + '/' + resource.id, resource)
            .pipe(catchError(this.handleError));
    }
    delete(resource) {
        return this.httpClient.delete(this.requestUrl + '/' + resource.id)
            .pipe(catchError(this.handleError));
    }
    private handleError(error: Response) {
        if (error.status == 404) {
            return throwError(new NotFoundError())
        }
        else if (error.status == 400) {
            return throwError(new BadInputError())
        } else {
            return throwError(new AppError(error));
        }
    }
}