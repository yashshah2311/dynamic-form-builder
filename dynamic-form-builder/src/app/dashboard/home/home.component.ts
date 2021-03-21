import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { PrimeNGConfig } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  // var user = 1;
  
  dataform: any;
  isDataformEmpty = false;
  constructor(
    private homeService: HomeService ,
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.callTemplateApiByUserId();  
  }

  callTemplateApiByUserId(){
    this.homeService.getTemplateByUserId().subscribe(async (response: any) => {        
      if (response && response.error && response.error.length === 0) {
        this.dataform = (response.data) ? response.data : [] ;
        if(this.dataform === []){
          this.isDataformEmpty = true;
        }
      }
    },
      (error: any) => {
        throw error;
      });
  }

  clicked(data: any){
    const host = window.location.hostname;
      this.router.navigate(['/show-tempalte'], { queryParams: { templateId: '4' } });
    // }
    //  return 'https' + '://' + 'qa-hire.scikey.ai' + ':' + '443' + param1.apiPrefix + param2;
    return 'http://' + host + ':4200/';
    // console.log(data);
    // return this.httpClient.get(this.baseURL + 'show-template/' + userName + '/repos?'+'page='+PageNo+'&sort='+SortOn);
  }
}
