import {Component} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html'
})

export class ChildComponent{

  msg:string="";
  msg2:string="";

  updatemsg(msg):void{
    this.msg=msg;
  }
}
