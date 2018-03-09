import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: AppService,private router: Router) { }

  ngOnInit() {
  }

  onLogout()
  {
    localStorage.clear();
    this.service.loginstatus = false;
    this.router.navigate(['/login']);
  }

}
