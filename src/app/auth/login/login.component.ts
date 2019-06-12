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

  user:Object;
  loginForm:FormGroup;
  constructor(private authservice:AuthService,private router:Router,private fb:FormBuilder) { }

  ngOnInit() {
    //console.log(this.authservice.userLoggedIn);
    this.loginForm=this.fb.group({
      email:[''],
      pwd:['']
    })
  }

  

  submitForm(){
   this. user={
      email:this.loginForm.controls.email.value,
      pwd:this.loginForm.controls.pwd.value
    }
    //console.log("You cliked the submit button");
    this.authservice.logIn(this.user);
    //console.log("TCL: LoginComponent -> submitForm -> this.authservice.redirectUrl", this.authservice.redirectUrl)
     
    if(this.authservice.redirectUrl){
      //console.log('redirecting')
      this.router.navigateByUrl(this.authservice.redirectUrl);
    }
  }

}
