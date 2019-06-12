import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck{
 
  email:string;
  constructor(private auth:AuthService,private router:Router){}
  loginStatus:boolean=false;

  ngOnInit(){
   this.loginStatus=this.auth.userLoggedIn
   console.log("TCL: AppComponent -> ngOnInit -> this.loginStatus", this.loginStatus)
  }
 
  ngDoCheck(): void {
    this.loginStatus=this.auth.userLoggedIn;
    console.log("TCL: AppComponent -> ngDocheck -> this.loginStatus", this.loginStatus)
    this.email=this.auth.email;
  }

  title = 'RoutingDemo';


  logout(){
    this.auth.userLoggedIn=false;  
    this.router.navigate(['/home']) ; 
  }
}
