import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.userForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    const formData = this.userForm.value;
    const body = { data: formData }
    if (this.validateEmail() && this.validatePassword()) {
      this.authService.getAuthResponse(body).subscribe(async (response: any) => {
        // console.log(response);
        if (response && response.error && response.error.length === 0) {
          // console.log(response);
          this.router.navigate(['/dashboard/home']);              
        }
      },
        (error: any) => {
          throw error;
        });
    }
  }

  validateEmail() {
    const formData = this.userForm.value;
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
    const formData = this.userForm.value;
    if (formData.password === "") {
      // console.log("---------2");
      return false;
    }
    return true;
  }
}
