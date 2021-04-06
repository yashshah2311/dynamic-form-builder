import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';
import { SharedService } from '../shared/services/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userForm: FormGroup;
  isSubmitted  =  false;
  isEmailValid = true;
  isPasswordValid = true;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private sharedService: SharedService,
    private router: Router) {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.userForm.controls; }

  onSubmit() {
    const formData = this.userForm.value;
    const body = { data: formData };
    this.isSubmitted = true;
    if(this.userForm.invalid){
      this.validateEmail()
      return;
    }
    if(this.validateEmail() && this.userForm.valid){
      this.authService.getAuthResponse(body).subscribe(async (response: any) => {
        
        if (response && response.error && response.error.length === 0) {
          
          sessionStorage.setItem('userid', response.data['userid']);
          sessionStorage.setItem('isLoggedin', "true");
          this.sharedService.setSession(true);
          // localStorage.setItem('userid', response.data['userid']);
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
    if (!re.test(formData.email)) {
      
      this.isEmailValid = false;
      return false;
    }
    return true;
  }
}
