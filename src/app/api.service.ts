import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/Rx";
@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getData1(id)
  {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/"+id);
  }

}
