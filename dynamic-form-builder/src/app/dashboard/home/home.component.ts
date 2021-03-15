import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  // var user = 1;
  
  dataform: any;
  constructor(
    private homeService: HomeService ,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.callTemplateApiByUserId();  
  }

  callTemplateApiByUserId(){
    this.homeService.getTemplateByUserId().subscribe(async (response: any) => {        
      if (response && response.error && response.error.length === 0) {
        this.dataform = (response.data) ? response.data : [] ;
      }
    },
      (error: any) => {
        throw error;
      });
  }

  clicked(data: any){
    // console.log(data);
  }
}
