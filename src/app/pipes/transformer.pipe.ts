import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformer'
})
export class TransformerPipe implements PipeTransform {

  transform(value: unknown, name:any, token:any): unknown {
    return value + ' - ' + name + ' - ' + token;
  }

}
