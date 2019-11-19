import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], searchKey: string): any[] {
    if (searchKey) {
      const newArray = [];
      value.forEach(data => {
        if (data.name.toLowerCase().includes(searchKey.toLowerCase())) {
          newArray.push(data);
        }
      });
      return newArray;
    } else {
      return value;
    }
  }
}
