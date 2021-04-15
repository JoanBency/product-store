import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.sass']
})
export class ProductListingComponent implements OnInit {
  products:  Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(res => {
      this.products = res;
       }//, err => {
      //   console.log(err)
      // }
      ) 
    }
  }
