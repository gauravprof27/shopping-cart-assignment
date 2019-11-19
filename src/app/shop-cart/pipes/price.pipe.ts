import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any[], minVal: number, maxVal: number): any[] {
    if (maxVal) {

      const newArray = [];
      value.forEach(data => {
          if(data.price >= minVal && data.price <= maxVal){
            newArray.push(data);
          }
      });
      return newArray;
    } else {
      return value;
    }
  }

}
