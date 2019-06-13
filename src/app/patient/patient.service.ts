import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map, catchError, switchMap, flatMap} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DoctorData } from '../shared/doctor-data';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  url:string;
  constructor(private http:HttpClient) { }
  
  getDoctorsList(){
    this.url='https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=73c516420900321a919d5c4804022076';
    return this.http.get(this.url).pipe(     
      map(res => res['data']) ,
      catchError(this.errorHandler)    
    )
  }
  errorHandler(err:HttpErrorResponse):Observable<any> {
  console.log("TCL: PatientService -> constructor -> err", err)
   
  //cleint side error
  if(err.error instanceof Error){
    console.log('error happened')
  }
  //server side error
  else{
    console.log( err.status,err.name);
  }
  return throwError(err);
  }
}
