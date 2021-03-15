import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private authSubject = new BehaviorSubject(false);

  constructor() { }
  setSession(value: any) {
    console.log(value)
    this.authSubject.next(value);
  }
  isLoggedIn() {
    return this.authSubject.asObservable();
  }
  linkGeneration(param1: any, param2: any) {
    const host = window.location.hostname;
    //  return 'https' + '://' + 'qa-hire.scikey.ai' + ':' + '443' + param1.apiPrefix + param2;
    return param1.protocol + '://' + host + ':' + param1.port + param1.apiPrefix + param2;
  }

  setHeaderWithParams(param: any) {
    const headers = new Headers();
    const userCode = sessionStorage.get('userid');
    headers.append('Content-Type', 'application/json');
    headers.append('userid', userCode);
    const options = new RequestOptions({ headers: headers, params: param });
    return options;
  }

  setHeader() {
    const headers = new Headers();
    const userCode = sessionStorage.get('userid');
    headers.append('Content-Type', 'application/json');
    headers.append('userid', userCode);
    const options = new RequestOptions({ headers: headers });
    return options;
  }


}
