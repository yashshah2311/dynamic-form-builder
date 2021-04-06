import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SharedService } from 'src/app/auth/shared/services/shared/shared.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private http: Http,
    private sharedService: SharedService) { }

  getSaveTemplateResponse(body: any) {
    let userId:any = sessionStorage.getItem('userid');
    let getUrlLink:string = this.sharedService.linkGeneration(environment.template, environment.template.saveTemplate);
    getUrlLink = getUrlLink.replace(':userid', userId);
    return this.http.post(getUrlLink, body)
      .map((response: any) => {
        
        return response.json();
      })
      .catch((error: any) => {
        return error.json();
      });
  }
}
