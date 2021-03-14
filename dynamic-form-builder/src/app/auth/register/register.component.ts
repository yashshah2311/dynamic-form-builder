import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: ['']
    });
  }
  // onSubmit(data){
  //   let response = data;
  // }

  
  ngOnInit(): void {
  }

  onSubmit() {
    const formData = this.registerForm.value;
    console.log(formData);
    const body = { data: formData }
    if (this.validateEmail() && this.validatePassword() && this.validateRepeatPassword()) {
      this.authService.getRegisterResponse(body).subscribe(async (response: any) => {
        
        if (response && response.error && response.error.length === 0) {
          
          this.router.navigate(['auth/login']);              
        }
      },
        (error: any) => {
          throw error;
        });
    }
    console.log(formData);
  }

  validateEmail() {
    const formData = this.registerForm.value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(formData.email)) {
      // console.log("---------333");
    }

    if (formData.email === "") {
      // console.log("---------1");
      return false;
    }
    return true;
  }

  validatePassword() {
    const formData = this.registerForm.value;
    if (formData.password === "") {
      // console.log("---------2");
      return false;
    }
    return true;
  }

  validateRepeatPassword() {
    const formData = this.registerForm.value;
    if (formData.repeatPassword === "") {
      // console.log("---------2");
      return false;
    }
    return true;
  }
}
