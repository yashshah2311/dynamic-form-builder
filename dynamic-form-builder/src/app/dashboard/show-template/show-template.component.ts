import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowTemplateService } from './show-template.service';

@Component({
  selector: 'app-show-template',
  templateUrl: './show-template.component.html',
  styleUrls: ['./show-template.component.scss']
})
export class ShowTemplateComponent implements OnInit {
  templateId: any = "";
  data: any = [];
  formDetails: any = [];
  constructor(private _Activatedroute:ActivatedRoute,
    private showTemplateService: ShowTemplateService) { }

    ngOnInit(): void { 
    this._Activatedroute.paramMap.subscribe(params => { 
        this.templateId = params.get('id'); 
    });
    this.callTemplateApiByUserId();
  }

  callTemplateApiByUserId(){
    this.showTemplateService.getTemplate(this.templateId).subscribe(async (response: any) => {        
      if (response && response.error && response.error.length === 0) {
        this.data = response.data;
        // console.log(this.data);

        this.formDetails = response.data['formDetails'];
        
        // console.log(response.data['formDetails']);
      }
    },
      (error: any) => {
        throw error;
      });
  }

}
