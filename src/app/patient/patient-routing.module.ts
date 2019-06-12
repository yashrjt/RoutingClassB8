import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [
 
    {path:'',component:PatientDashboardComponent,children:[
        {path:'searchDoctor',component:SearchDoctorComponent},
        {path:'bookAppointment',canActivate:[AuthGuard],component:BookAppointmentComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PatientRoutingModule { }
