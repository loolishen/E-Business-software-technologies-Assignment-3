import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class PipesPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return value.toUpperCase();
    }
    return value;
  }
}
