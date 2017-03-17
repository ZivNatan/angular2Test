import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public selectedCar = null;
  public carsArray = [
    {id:'0',src:'http://cdn3.droom.in/photos/images/drm/super-cars.png'},
    {id:'1',src:'http://www.drodd.com/images14/cars15.jpg'},
    {id:'2',src:'http://www.drodd.com/images14/cars10.jpg'},
    {id:'3',src:'http://www.ford.com/resources/ford/general/newvehicles/Future_Landing_Page/fordGT_large.jpg?v=1451486780000'}
    ];

  public carSelected = function (id) {
    this.selectedCar = this.carsArray[id];
  }
}
