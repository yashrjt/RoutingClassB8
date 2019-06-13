import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { DoctorProfile } from 'src/app/shared/doctor-profile';
import { DoctorData } from 'src/app/shared/doctor-data';



@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {

  constructor(private patient:PatientService) { }

  doctorList:Array<DoctorProfile>=[];
  ngOnInit() {
  }

  getDoctor(){
    this.patient.getDoctorsList().subscribe(
      (value)=>{               
        value.map((v) =>{         
            console.log("TCL: SearchDoctorComponent -> getDoctor -> v", v)
            this.doctorList.push(v.profile);         
         })
      } 
    );
    console.log( this.doctorList);
  }


 
}
