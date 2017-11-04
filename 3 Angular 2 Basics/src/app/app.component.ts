import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myStyle = 'red';
  message= 'my message';
  value = 'ng init';
  name:string="";
  result:string='';

  style:string="cssStyle";

  initvalue='init Value';
  data="";

  takeInput(event):void{
    this.result=event.target.value;
  }

  showData():void{
    this.data="This is Data";
  }

}
