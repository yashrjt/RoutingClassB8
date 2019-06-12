import { Component, OnInit, OnDestroy } from '@angular/core';
import { Routes } from '@angular/router';
import { BookAppointmentComponent } from '../book-appointment/book-appointment.component';


@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit ,OnDestroy{


  constructor() { }

  ngOnInit() {
    console.log('patient dashboard comp initialized');  
  }

  ngOnDestroy(): void {
    console.log('patient dashboard comp destroyed');
  }
}
