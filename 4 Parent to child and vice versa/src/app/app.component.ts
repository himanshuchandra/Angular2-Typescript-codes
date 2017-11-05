import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageFromChild:string='';
  parentFunction(xyz:string):void{
    this.messageFromChild=xyz;
    console.log(xyz);
  }

}
