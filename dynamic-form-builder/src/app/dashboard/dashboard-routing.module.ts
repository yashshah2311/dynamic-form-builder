import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { HomeComponent } from './home/home.component';
import { ShowTemplateComponent } from './show-template/show-template.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-form', component: FormBuilderComponent},
  { path: 'show-template/:id', component: ShowTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
