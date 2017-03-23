import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent  {

  carsArray = [
    {id:'0', name:'QLeD3m', src:'../assets/images/BB.jpg', text:"D: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'1', name:'leedsz02', src:'../assets/images/leedsz02.jpg',text:"C: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.."},
    {id:'2', name:'Iris', src:'../assets/images/iris.jpg',text:"B: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {id:'3', name:'Standard', src:'../assets/images/img.jpg',text:"A: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."},

    {id:'4', name:'Renault Sport R.S.', src:'../assets/images/3cc86f8b69bbb99508fbcde3f44e0bd2.jpg', text:"D: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'5', name:'Super-car', src:'../assets/images/super-cars.jpg',text:"C: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.."},
    {id:'6', name:'Download', src:'../assets/images/download.jpg',text:"B: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {id:'7', name:'BMW Black', src:'../assets/images/cars.jpg',text:"A: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."},

    {id:'8', name:'Renault Sport R.S.', src:'../assets/images/images.jpg', text:"D: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'9', name:'Ford-Mustang-GT', src:'../assets/images/images1.jpg',text:"C: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.."},
    {id:'10', name:'Download', src:'../assets/images/full-hd-car-picture.jpg',text:"B: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {id:'11', name:'ford-mustang', src:'../assets/images/ford-mustang.jpg',text:"A: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."},

    {id:'12', name:'Ferrari-458_Spider', src:'../assets/images/Ferrari-458_Spider.jpg', text:"D: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'13', name:'Ff571c0299', src:'../assets/images/f571c02991d94c59d20a88d26a85d968.jpg',text:"C: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.."},
    {id:'14', name:'Exotic-Car', src:'../assets/images/Exotic-Car-Wallpapers-HD-Edition-stugon.com-25.jpg',text:"B: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {id:'15', name:'Corvettegs', src:'../assets/images/corvettegs-1.jpg',text:"A: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."},

    {id:'16', name:'Convertible', src:'../assets/images/convertible.jpg', text:"D: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'17', name:'Chevrolet corvette', src:'../assets/images/chevrolet_corvette-c3-stingray-l36-427-coupe-1969_r4.jpg',text:"C: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.."},
    {id:'18', name:'Mitzi', src:'../assets/images/cars.jpg',text:"B: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {id:'19', name:'Monster', src:'../assets/images/car-49278_960_720.jpg',text:"A: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."},

    {id:'20', name:'Sports-car', src:'../assets/images/4506511-sports-car-wallpapers.jpg', text:"D: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'21', name:'GreenMF', src:'../assets/images/4058255-cars-wallpapers-hd.jpg',text:"C: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.."},
    {id:'22', name:'Corvette-Z06', src:'../assets/images/2015-Chevrolet-Corvette-Z06-Convertible.jpg',text:"B: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {id:'23', name:'Analog', src:'../assets/images/54cb1d27a519c_-_analog-sports-cars-01-1013-de.jpg',text:"A: The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."},

    {id:'24', name:'American-muscle', src:'../assets/images/54cae4238a5cf_-_american-muscle-facts-05-0312-xln.jpg', text:"D: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'25', name:'Mclaren-p14', src:'../assets/images/25-cars-worth-waiting-for-lp-mclaren-p14-photo-658259-s-original.jpg',text:"C: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.."}
  ];
  cars =  this.carsArray.slice(0,4);
  selectedCar = this.carsArray[9];
  page=1;
  lastPage = Math.ceil(this.carsArray.length/4);
  first=1;
  middle=2;
  last=3;

  public pagination = function(page){
    debugger;
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


