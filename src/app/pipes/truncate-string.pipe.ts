import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateString'
})
export class TruncateStringPipe implements PipeTransform {

  transform(value: any, limit: number): any {
    if (value && isNaN(value)) {
      if (limit > value.length) {
        return value.slice(0, limit);
      } else {
        return value.slice(0, limit) + '...';
      }
    } else {
      return value;
    }
  }

}
