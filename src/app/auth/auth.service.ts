import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  userLoggedIn:boolean=false;
  email:string;
  redirectUrl: string;
  constructor() { }

  logIn(user) {
    //http call api 
    
    this.userLoggedIn=true;   
    this.email=user.email;
    console.log("TCL: AuthService -> loggedIn -> this.userLoggedIn", this.userLoggedIn)
   
  }

  checkLoggedIn(){
    return  this.userLoggedIn;
  }


}
