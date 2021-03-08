import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedService } from './shared/services/shared/shared.service';
import { AuthService } from './shared/services/auth/auth.service';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule, FormsModule, ReactiveFormsModule
    // SharedModule
  ],
  providers: [
    AuthService,
    SharedService
  ]
})
export class AuthModule { }