import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardModule } from 'primeng/card';

import { HomeComponent } from './home/home.component';
import { ShowTemplateComponent } from './show-template/show-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [HomeComponent, ShowTemplateComponent, FormBuilderComponent],
  exports: [
    HomeComponent, ShowTemplateComponent, FormBuilderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    FormsModule, ReactiveFormsModule
    // BrowserModule,
    // BrowserAnimationsModule
  ],
  bootstrap:    [ HomeComponent, ShowTemplateComponent, FormBuilderComponent ]
})
export class DashboardModule { }
