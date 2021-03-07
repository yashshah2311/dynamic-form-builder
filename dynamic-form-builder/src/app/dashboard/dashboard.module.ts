import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';



@NgModule({
  declarations: [HomeComponent, FormBuilderComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
