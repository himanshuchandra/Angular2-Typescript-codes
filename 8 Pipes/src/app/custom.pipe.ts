import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
  name:'portion'
})

export class CustomPipe implements PipeTransform{
  transform(value:any,pipeParamStart:number,pipeParamEnd:number){
    return value.substring(pipeParamStart,pipeParamEnd);
  }
}
