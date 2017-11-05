import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector:"child",
  templateUrl:"./child.component.html",
  styleUrls:['./child.component.css']
})

export class ChildComponent{
  parentMessage:string='';
  parentName:string='';

  @Input()
  message:string;

  @Input("alias")
  name:string;

  @Output()
  myfunction=new EventEmitter<string>()

  passDataToParent():void{
    this.myfunction.emit("hello parent from child!");
  }

  showParentData():void{
    this.parentMessage=this.message;
    this.parentName=this.name;
  }
}
