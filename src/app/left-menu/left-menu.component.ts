import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import "rxjs/Rx"
@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private apiservice: ApiService) { }
  pageData: any;
  ngOnInit() {
  }
  data(no){
     this.apiservice.getData1(no).subscribe(
      (res)=>{
        this.pageData  = res.json();
        console.log(this.pageData);

      }
    );
  }
}
