import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], propertyName: string, order: boolean): any[] {
    if (propertyName) {
      let newArray = value.sort((a: any, b: any) =>
        b[propertyName].toString().localeCompare(a[propertyName].toString())
      );
      if (order) {
        return newArray;
      } else {
        return newArray.reverse();
      }
    } else {
      return value;
    }
  }

}
