import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.sass']
})
export class ProductListingComponent implements OnInit {
  products: any;
  isLoading=true;
  confirmMsg:boolean;
  msg:any = false;

  constructor(private productService: ProductService, private route: ActivatedRoute, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(res => {
      this.products = res;
      this.isLoading = false;
       }
      ) 
    }
    delete(id: any) {
      this.confirmMsg = confirm("Are you sure you wanna delete this?");
      if(this.confirmMsg === true) {
        this.productService.deleteProducts(id)
          .subscribe(res => {
          console.log(res);
          console.log("Deleted Successfully");
          this.refreshPage();
          })
        }
      }
      refreshPage() {
        this._document.defaultView.location.reload();
      
      }
  }
