import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SharedService } from 'src/app/auth/shared/services/shared/shared.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private sharedService: SharedService,
    public _http: Http
  ) { }

  getTemplateByUserId() {
    let userId:any = sessionStorage.getItem('userid');
    let getUrlLink:string = this.sharedService.linkGeneration(environment.template, environment.template.getTemplatesByUser);
    getUrlLink = getUrlLink.replace(':userid', userId);
    // console.log(getUrlLink)
    return this._http.get(getUrlLink).map(response => {
      return response.json();
    })
      .catch(error => {
        return error.json();
      });
  }
}
