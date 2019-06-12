import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { BookAppointmentComponent } from './patient/book-appointment/book-appointment.component';
import { SearchDoctorComponent } from './patient/search-doctor/search-doctor.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'}, 
  {path:'home',component:HomeComponent}, 
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'patients',loadChildren:'./patient/patient.module#PatientModule'},
  {path:'doctors',component:DoctorDashboardComponent},
  {path:'pagenotfound',component:PageNotFoundComponent},
  {path:'**', redirectTo:'/pagenotfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
