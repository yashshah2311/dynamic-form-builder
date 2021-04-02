import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilderService } from './form-builder.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {
  createForm: FormGroup;
  editing = false;
  header: String = '';
  color: String = '';
  createFormHeader: FormGroup;
  newField: any = [];
  showCreateFields = false;
  constructor(private formBuilder: FormBuilder,
    private formBuilderService: FormBuilderService,
    private router: Router) { 
    this.createForm = this.formBuilder.group({
      name: ['Name', Validators.required],
      required: [false, Validators.required],
      order: [1, Validators.required],
      type: ['text', Validators.required],
      placeholder:['Please enter your name', Validators.required],
      options: this.formBuilder.array([this.formBuilder.group({name:'', value: '', order: ''})])
    });

    this.createFormHeader = this.formBuilder.group({
      formHeading: ['', Validators.required],
      formColor: ['', Validators.required]
    });
  }
  get formHeaderControls() { return this.createFormHeader.controls; }
  get formControls() { return this.createForm.controls; }
  get options() {
    return this.createForm.get('options') as FormArray;
  }
  ngOnInit(): void {

  }
  
  addSellingPoint() {
    this.options.push(this.formBuilder.group({name:'', value: '', order: ''}));
  }

  deleteSellingPoint(index: any) {
    this.options.removeAt(index);
  }

  splice(field: any, fields: any) {
		fields.splice(fields.indexOf(field), 1);
	}

  saveField(){
    const formData = this.createForm.value;
    if(!(formData['type'] === "checkboxes" || formData['type'] === "select" || formData['type'] === "radio")){
      delete formData['options'];
    }else{
      delete formData['placeholder'];
    }
    this.newField.push(formData);
  }

  saveHeader(){
    const formData = this.createFormHeader.value;
    // console.log(formData);
    this.header = formData['formHeading'];
    this.color = formData['formColor']; 
    if(this.createFormHeader.invalid){
      return;
    }
    if(this.createFormHeader.valid){
      // console.log(this.header);
      // console.log(this.color);
      this.showCreateFields = true;
    }   
  }

  // editField(field: any) {
	// 	this.editing = fields.indexOf(field);
	// 	newField = field;
	// }

  typeSwitch(type: any) {
		/*if (angular.Array.indexOf(['checkboxes','select','radio'], type) === -1)
			return type;*/
    // console.log(type);
		if (type == 'checkboxes')
			return 'multiple';
		if (type == 'select')
			return 'multiple';
		if (type == 'radio')
			return 'multiple';

		return type;
	}

  addOption() {
		// if (newField.options === undefined) {
		// 	newField.options = [];
		// }
		// newField.options.push({
		// 	order : 0
		// });
	}

  saveTemplate(){
    const formData = {
      formColor: this.color,
      formHeading: this.header,
      formDetails: this.newField
    };
    // console.log(formData);
    const body = { data: formData };
    if (formData['formHeading'] !== "") {

      this.formBuilderService.getSaveTemplateResponse(body).subscribe(async (response: any) => {        
        if (response && response.error && response.error.length === 0) {
          
          this.router.navigate(['dashboard/home']);              
        }
      },
        (error: any) => {
          throw error;
        });
    }
  }
}
