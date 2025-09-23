import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my'
})
export class MyPipe implements PipeTransform {

 
  transform(value: any): unknown {

    if (value !== null && value !== undefined && value !== '') {
      return value;
    } else {
      return "N/A";
    }
  }

}
