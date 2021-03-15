import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
// import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http,
    private sharedService: SharedService
  ) { }

  getAuthResponse(body: any) {
    const url = this.sharedService.linkGeneration(environment.auth, environment.auth.resourcelogin)
    return this.http.post(url, body)
      .map((response: any) => {
        // console.log(response.json());
        return response.json();
      })
      .catch((error: any) => {
        return error.json();
      });
  }

  getRegisterResponse(body: any) {
    const url = this.sharedService.linkGeneration(environment.auth, environment.auth.resourceRegister)
    return this.http.post(url, body)
      .map((response: any) => {
        // console.log(response.json());
        return response.json();
      })
      .catch((error: any) => {
        return error.json();
      });
  }

  // handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }
}