import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class AppService {
  loginstatus: boolean;
  errMsg: boolean;
  constructor(private router: Router) { }
  login(e,p){
    if(e === "p@gmail.com" && p === "priti123")
    {
      localStorage.setItem("loginData","true");
      this.loginstatus = true;
      this.errMsg = false;
      this.router.navigate(['/page']);
    }
    else {
      this.loginstatus = false;
      this.errMsg = true;
    }
  }
}
