import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { SharedModule } from '../shared/shared.module';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { RouterModule } from '@angular/router';
import { PatientRoutingModule } from './patient-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [BookAppointmentComponent, PatientDashboardComponent, SearchDoctorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PatientRoutingModule,
    ReactiveFormsModule
  ],
  exports:[ PatientDashboardComponent,BookAppointmentComponent]
})
export class PatientModule { }


  