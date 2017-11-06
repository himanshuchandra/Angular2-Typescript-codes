import { Component,OnInit } from '@angular/core';
import {Item} from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  itemList=new Array<Item>();
  myCase:number=8;
  button=false;
  //life cycle method
  ngOnInit(){
    this.prepareItems();
    console.log(this.itemList);
  }

  private prepareItems():void{
   for(let i=1;i<5;i++){
     let itemObject=new Item(i+10,i*10,"xyz"+i);
     console.log(itemObject);
     this.itemList.push(itemObject);
   }
  }

  hideButton():void{
    this.button=true;
  }

  //styling
  style:string='cssStyle';
  redit:boolean=true;
}
