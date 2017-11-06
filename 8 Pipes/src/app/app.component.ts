import { Component,OnInit } from '@angular/core';
import {Item} from './item.model';
import {Singleton} from './app.singleton';
import {AppService} from './app.service';
import {Product} from './ProductModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent{
  salary:number=12.7654312121;
  text:string="this is text";
  name:string="Amit";
  currentDate=new Date();
  roi:number=10.20;
  object:Object = {id:1001,name:'Ram',salary:9000}
}
