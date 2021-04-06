import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from '../auth/shared/guard/dashboard.guard';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { HomeComponent } from './home/home.component';
import { ShowTemplateComponent } from './show-template/show-template.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [DashboardGuard], runGuardsAndResolvers: 'always' },
  { path: 'create-form', component: FormBuilderComponent, canActivate: [DashboardGuard], runGuardsAndResolvers: 'always' },
  { path: 'show-template/:id', component: ShowTemplateComponent, canActivate: [DashboardGuard], runGuardsAndResolvers: 'always' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
