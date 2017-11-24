import { Component } from '@angular/core';
import { Products } from './app.service';
import { Product } from './app.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Products]
})
export class AppComponent {

  products: Products;
  constructor(service: Products) {
    this.products = service;
  }
  productArray: Product[];
  loadProducts() {
    var promise=this.products.fetchProducts();
    promise.subscribe((productArray => {
        this.productArray = productArray["mobiles"];
        console.log(this.productArray);
      }),(error=>{
        console.log(error);
      }));
    // this.products.fetchProducts().subscribe((productArray => {
    //   this.productArray = productArray["mobiles"];
    //   console.log(this.productArray);
    // }));

  }

}
