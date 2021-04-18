import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.sass']
})
export class ProductAddComponent implements OnInit {
  ProductArr: Product;

  ngOnInit() {
  }

   constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

    addProducts(userForm: any) {
      console.log(userForm.value);
      let obj = userForm.value;

      this.productService.addProducts(obj).subscribe(res => {
        console.log("Product Added Successfully");
        this.goToHome();
      });
    }
    goToHome() {
      this.router.navigate(['/']);
    }
  

}
