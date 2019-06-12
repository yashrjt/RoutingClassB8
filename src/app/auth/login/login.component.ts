import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm:FormGroup;
  constructor(private authservice:AuthService,private router:Router,private fb:FormBuilder) { }

  ngOnInit() {
    console.log(this.authservice.userLoggedIn);
    this.loginForm=this.fb.group({
      email:[''],
      pwd:['']
    })
  }

  

  submitForm(){
    console.log(this.loginForm.controls)
    console.log("You cliked the submit button");
    //this.authservice.logIn();
    console.log("TCL: LoginComponent -> submitForm -> this.authservice.redirectUrl", this.authservice.redirectUrl)
     
    if(this.authservice.redirectUrl){
      console.log('redirecting')
      this.router.navigateByUrl(this.authservice.redirectUrl);
    }
  }

}
