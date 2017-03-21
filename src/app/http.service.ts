import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class HttpService {

  constructor(private http:Http) { }
   getData(){
      return this.http.get("https://angular2-course-f7e6b.firebaseio.com/cars.json");
     // return this.http.get("../public/carsList");
   }
}
