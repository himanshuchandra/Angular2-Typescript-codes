import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Product} from './ProductModel';

@Injectable()
 export class AppService{
  constructor(private http:Http){
  }

  prepareProduct():Product[]{
    var productList:Product[]=[];
    for(let i =1; i<=5; i++){
      let product  = new Product(i,"Apple"+i,9000+i,"https://staticshop.o2.co.uk/product/images/iphone_se_16gb_rose_gold_header.png?cb=28d7f5d2987a5964f7cd0ea7f5204419");
      productList.push(product);
    }
    return productList;
  }

  getProductsFromLocal():Promise<Product[]>{
    return Promise.resolve(this.prepareProduct());
  }

  getProductsFromServer():Promise<Product[]>{
    var url ="https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";
    return this.http.get(url).toPromise().then((response)=>{
      return response.json().mobiles as Product[];
    }).catch(this.handleError);

    //const object = {name:'Ram',age:21};
    //this.http.post(url, object);
  }

  handleError(error:any):Promise<any>{
    return Promise.reject(error.message || error);
  }

 }
