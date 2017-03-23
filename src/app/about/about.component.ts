import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent  {

  carsArray = AppComponent.carsArray;
  cars =  this.carsArray.slice(0,4);
  selectedCar = this.carsArray[9];
  page=1;
  lastPage = Math.ceil(this.carsArray.length/4);
  first=1;
  middle=2;
  last=3;

  public pagination = function(page){

    if(page-1 <= 0){
      this.first=1;
      this.middle=2;
      this.last=3;
    }
    else if(page+1 > this.lastPage){
      this.first=page-2;
      this.middle=page-1;
      this.last=page;

    }else{
      this.first=page-1;
      this.middle=page;
      this.last=page+1;
    }

    this.page = page;
    var start =(page-1)*4;
    var end = start+ 4;
    if(end > this.carsArray.length){
      end =  this.carsArray.length;
    }
    this.cars =  this.carsArray.slice(start,end);

  }
  public carSelected = function (id,index) {
    this.selectedCar = this.carsArray[id];
    window.scrollTo(0,document.body.scrollHeight);
    if( this.cars[index].selected == undefined || this.cars[index].selected == false ){
      this.cars[index].selected = true;
      this.carsArray[id].selected = true;
    }else{
      this.cars[index].selected = false;
      this.carsArray[id].selected = false;
    }
  }
}


