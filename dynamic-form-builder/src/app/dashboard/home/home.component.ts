import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from './home.service';
import { PrimeNGConfig } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class HomeComponent implements OnInit {
  // var user = 1;
  color = 'orange';
  defaultCard = {
    'background-color': 'orange',
    'margin-bottom': '2em',
    'width': '200px',
    'height': '90px',
    'border-radius': '25px',
    'text-align': 'center',
    'padding-top': '70px',
    'color': 'white',
    'font-weight': 'bold',
    'margin-left': '50px',
    'margin-right': '40px'
  };
  dataform: any;
  isDataformEmpty = false;
  constructor(
    private homeService: HomeService ,
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.isDataformEmpty = false;
    this.callTemplateApiByUserId();  
  }

  callTemplateApiByUserId(){
    this.homeService.getTemplateByUserId().subscribe(async (response: any) => {        
      if (response && response.error && response.error.length === 0) {
        this.dataform = response.data;
        if(this.dataform.length === 0){
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
    
    // return this.httpClient.get(this.baseURL + 'show-template/' + userName + '/repos?'+'page='+PageNo+'&sort='+SortOn);
  }
}
