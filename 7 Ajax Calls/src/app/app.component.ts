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
  appService:AppService;
  productList:Product[]=[];
  constructor(appService:AppService){
    this.appService=appService;
  }

  localCall():void{
    this.appService.getProductsFromLocal().then(products=>{
      return this.productList=products;
    });
  }

  serverCall():void{
    this.appService.getProductsFromServer().then(products=>{
      return this.productList=products;
    });;
  }
}
