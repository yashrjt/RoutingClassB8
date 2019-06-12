import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  userLoggedIn:boolean=false;
  redirectUrl: string;
  constructor() { }

  logIn() {
    //http call api
  
    this.userLoggedIn=true;
    console.log("TCL: AuthService -> loggedIn -> this.userLoggedIn", this.userLoggedIn)
   
  }

  checkLoggedIn(){
    return  this.userLoggedIn;
  }


}
