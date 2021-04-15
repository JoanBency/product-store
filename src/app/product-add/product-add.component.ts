import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.sass']
})
export class ProductAddComponent implements OnInit {
  // productForm: FormGroup;
  ProductArr: Product;

  ngOnInit() {
    // this.addProduct()
    // var product = new Product();

    // product.title = 'dfsdfsd';
    // product.imageUrl = 'seffadas';
    // product.description = 'dwdwqqwd';

    // this.productService.addProducts(product)
    // .subscribe( data => {
    //   this.ProductArr = data;
    // })
  }

   constructor(private productService: ProductService) { }

    // addProduct() {
    //   this.productForm = this.fb.group({
    //     product_id: [''],
    //     product_title: [''],
    //     product_url: [''],
    //     product_desc: ['']
    //   })
    // }

    // submitForm() {
    //   this.productService.addProducts(this.productForm.value).subscribe(res => {
    //     console.log('Product added!')
    //     this.ngZone.run(() => this.router.navigateByUrl('/'))
    //   });
    // }
    addProducts(userForm) {
      console.log(userForm.value);
      let obj = userForm.value;

      this.productService.addProducts(obj).subscribe(res => {
        console.log("Product Added Successfully");
      });
    }

  

}
