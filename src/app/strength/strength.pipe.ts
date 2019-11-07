import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength'
})
export class StrengthPipe implements PipeTransform {
  transform(value: number): string {
    if (value !== null && value !== undefined && !Number.isNaN((value))) {
      if (value < 10) {
        return `${value} (weak)`;
      } else if (value >= 10 && value < 20) {
        return `${value} (strong)`;
      } else {
        return `${value} (unbelievable)`;
      }
    } else {
      throw new Error('No value provided');
    }
  }
}
