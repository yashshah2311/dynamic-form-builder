import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardModule } from 'primeng/card';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    // BrowserModule,
    // BrowserAnimationsModule
  ],
  bootstrap:    [ HomeComponent ]
})
export class DashboardModule { }
