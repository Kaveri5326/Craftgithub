import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'practice'
})
export class PracticePipe implements PipeTransform {

  transform(value: number): number {
    
    return Math.sqrt(value);
  }

}
