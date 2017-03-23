import { Component } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-services',
  templateUrl: 'services.component.html',
  styleUrls: ['services.component.css']

})
export class ServicesComponent {

  order='id';
  carsArray =AppComponent.carsArray;

  public sortArray = function(orderBy){
    this.order =orderBy;
  }
  galleryIndex =10;
  carsGallery= this.carsArray.slice(0,this.galleryIndex);

  onScroll () {
    console.log('scrolled!!');
     debugger;
    if((this.galleryIndex+4) > this.carsArray.length){
      this.galleryIndex = this.carsArray.length;
    }else{
      this.galleryIndex = this.galleryIndex+4;
    }
    this.carsGallery= this.carsArray.slice(0,this.galleryIndex);
  }

}
