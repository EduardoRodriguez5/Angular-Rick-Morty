import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityNamePlus'
})
export class PriorityNamePlusPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string{
    return value.includes(args[0]) ? args[1] + value + args[1] : value;
  }

}
