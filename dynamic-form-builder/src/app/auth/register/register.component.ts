import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  isSubmitted  =  false;
  isEmailValid = true;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // onSubmit(data){
  //   let response = data;
  // }
  get formControls() { return this.registerForm.controls; }
  
  ngOnInit(): void {
  }

  onSubmit() {
    const formData = this.registerForm.value;
    
    const body = { data: formData };
    this.isSubmitted = true;
    if(this.registerForm.invalid){
      this.validateEmail();
      return;
    }
    if (this.validateEmail() && this.registerForm.valid) {
      this.authService.getRegisterResponse(body).subscribe(async (response: any) => {        
        if (response && response.error && response.error.length === 0) {
          
          this.router.navigate(['auth/login']);              
        }
      },
        (error: any) => {
          throw error;
        });
    }
    
  }

  validateEmail() {
    const formData = this.registerForm.value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formData.email)) {
      
      this.isEmailValid = false;
      return false;
    }
    return true;
  }
}
