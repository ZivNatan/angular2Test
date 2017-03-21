import { Pipe, PipeTransform } from '@angular/core';
import  {AppComponent} from './app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(carsArray:any[], term: any): any {
    //check if  search term is  undefined
    if(term === undefined) return carsArray;
    // return update car array
    return carsArray.filter(function(car){
       return car.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
