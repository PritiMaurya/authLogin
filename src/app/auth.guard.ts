import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AppService} from "./app.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private service: AppService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const logindata = JSON.parse((localStorage.getItem('loginData')));
    if(logindata)
    {
      this.service.loginstatus = true;
      return true;
    }
    else {
      this.router.navigate(['/login']);
      console.log("you can't use it before login");
      return false;
    }
  }
}
