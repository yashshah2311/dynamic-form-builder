import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HttpModule, Http } from '@angular/http';
import { SharedService } from './auth/shared/services/shared/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    HttpModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
