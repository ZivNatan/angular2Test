import { Component, OnInit } from '@angular/core';
import  { Response} from '@angular/http';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-services',
  templateUrl: 'services.component.html',
  styleUrls: ['services.component.css'],
  providers:[HttpService]
})
export class ServicesComponent implements OnInit {

  constructor(private httpServices: HttpService) { }

  ngOnInit() {
    this.httpServices.getData()
      .subscribe(
         (data: Response) => console.log(data)
     );
  }

}
