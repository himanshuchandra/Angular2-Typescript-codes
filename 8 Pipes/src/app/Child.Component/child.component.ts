import {Component} from '@angular/core';
import {MyService} from './child.model';
import {MyService2} from './child2.model';
import {Singleton} from '../app.singleton';

@Component({
  selector:"child",
  templateUrl:"./child.component.html",
  styleUrls:['./child.component.css'],
  providers:[MyService,MyService2]
})

export class ChildComponent{

  service:MyService;
  service2:MyService2;
  singleton:Singleton;
  constructor(service:MyService,service2:MyService2,singleton:Singleton){
    this.service=service;
    this.service2=service2;
    this.singleton=singleton;
  }

  serviceData:string="";
  service2Data:string="";
  singletonData:string="";
  ngOnInit(){
    this.serviceData=this.service.serviceData;
  }


  getServiceData():void{
    this.serviceData=this.service.serviceData2;
    this.service2Data=this.service2.service2Data;
    this.singletonData=this.singleton.singletonData;
  }
}
