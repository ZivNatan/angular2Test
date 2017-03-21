import { Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import  { Response} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpService]
})
export class AppComponent implements OnInit{

  constructor(private httpServices: HttpService){}
  ngOnInit() {
    this.httpServices.getData()
      .subscribe(
        (data: Response) => {
          debugger;
          console.log(data)
        }

      );
  }






}
