import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './app.model';

@Injectable()

export class Products{
  constructor(private httpClient:HttpClient){
  }

  fetchProducts(){
    let url="https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";
    return this.httpClient.get<Product[]>(url);
  }
}
