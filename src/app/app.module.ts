import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';

import { DoctorModule } from './doctor/doctor.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,   
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     AuthModule,   
    DoctorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
