import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  linkGeneration(param1: any, param2: any) {
    const host = window.location.hostname;
    //  return 'https' + '://' + 'qa-hire.scikey.ai' + ':' + '443' + param1.apiPrefix + param2;
     return param1.protocol + '://' + host + ':' + param1.port + param1.apiPrefix + param2;
  }
}
