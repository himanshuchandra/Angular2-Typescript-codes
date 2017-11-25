import { ActivatedRoute } from '@angular/router';
import {Component} from '@angular/core';


@Component({
  selector:'shoes',
  templateUrl:'./shoe.component.html'
})
export class ShoeComponent{
  message:string='';
  constructor(private activatedRoute:ActivatedRoute){
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activatedRoute.params.subscribe((params)=>{
      this.message="Price:"+params.price+' .Brand:'+params.brand;
    })
  }

}
