import {Component} from '@angular/core';
@Component({
  selector:'home',
  template:`<h1>Home Component {{message}}</h1>`
})
export class HomeComponent {
message:string="Welcome to Home Component";
}
