import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService,private router:Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("TCL: AuthGuard -> state", state)
      
    return this.checkUserStatus(state.url);
  }

  checkUserStatus(url): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   console.log(url);
   let userStatus=this.auth.checkLoggedIn();

   if(userStatus){
     return true;
   }
   this.auth.redirectUrl=url;
   this.router.navigate(['/login']);
   return false;
  }
  
}
