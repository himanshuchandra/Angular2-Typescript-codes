import { Component,ViewChild } from '@angular/core';
import {ChildComponent} from './Child Component/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string="";

  showName(name):void{
    this.name=name;
  }

  @ViewChild(ChildComponent)
  childComponent:ChildComponent;

  updateChild():void{
    this.childComponent.msg2="Good Morning!";
    this.childComponent.updatemsg("hello");
  }

  ///Similarly @ViewChildren returns Querylist of all children

}
