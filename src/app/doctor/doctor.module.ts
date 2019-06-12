import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { SharedModule } from '../shared/shared.module';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';


@NgModule({
  declarations: [ViewAppointmentComponent, DoctorDashboardComponent],
  imports: [
    CommonModule,
   SharedModule
  ],
  exports:[ViewAppointmentComponent, DoctorDashboardComponent]
})
export class DoctorModule { }
