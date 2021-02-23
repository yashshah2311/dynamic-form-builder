import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedService } from './shared/services/shared/shared.service';
import { AuthService } from './shared/services/auth/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService,
    SharedService
  ]
})
export class AuthModule { }