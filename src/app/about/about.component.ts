import { Component } from '@angular/core';
import { FilterPipe} from '../filter.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  {AppComponent} from '../app.component'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {

  carsArray = [
    {id:'0', name:'Bugatti chiron', src:'http://cdn3.droom.in/photos/images/drm/super-cars.png', text:"D: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'1', name:'Citroen Survolt', src:'http://www.drodd.com/images14/cars15.jpg',text:"C: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.."},
    {id:'2', name:'Red', src:'http://www.drodd.com/images14/cars10.jpg',text:"B: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {id:'3', name:'Blue', src:'http://www.ford.com/resources/ford/general/newvehicles/Future_Landing_Page/fordGT_large.jpg?v=1451486780000',text:"A: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."},

    {id:'4', name:'Renault Sport R.S.', src:'../assets/images/3cc86f8b69bbb99508fbcde3f44e0bd2.jpg', text:"D: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'5', name:'Ford-Mustang-GT', src:'../assets/images/2016-Ford-Mustang-GT-burnout-red-tire-smoke.jpg',text:"C: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.."},
    {id:'6', name:'Download', src:'../assets/images/download.jpg',text:"B: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {id:'7', name:'BMW Black', src:'../assets/images/cars.jpg',text:"A: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
  ];
  cars =  this.carsArray;
  selectedCar = this.cars[0];
  public sortArray = function(orderBy){
    this.order =orderBy;

  }

  public carSelected = function (id) {
    this.selectedCar =this.carsArray[id];
    window.scrollTo(0,document.body.scrollHeight);
  }
}
