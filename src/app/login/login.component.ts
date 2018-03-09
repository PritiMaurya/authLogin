import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AppService,private router: Router) { }
  errMsg: boolean = false;
  ngOnInit() {
    const logindata = JSON.parse((localStorage.getItem('loginData')));
    if(logindata)
    {
      this.router.navigate(['/page']);
    }
    else
    {
      this.router.navigate(['/login']);
    }
  }

  onLogin(f)
  {
    //console.log(f.value);
    this.service.login(f.value.email,f.value.pass);
    this.errMsg = this.service.errMsg;
  }

}
