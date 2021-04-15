import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://sheltered-springs-67444.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.baseUrl + 'product');
  }
  getProductDetails(id: any) {
    return this.http.get(this.baseUrl + 'product/'+ id);
  }
  addProducts(product) {
    // const headers = { 'content-type': 'application/json'}  
    // const body=JSON.stringify(product);
    console.log(product);
    return this.http.post(this.baseUrl + 'product', product);//body,{'headers':headers})
  }
}
