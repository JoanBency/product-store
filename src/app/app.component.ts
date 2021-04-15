import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'product-store';
}
export class Product {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
} 
