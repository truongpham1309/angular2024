import { Component, Input } from '@angular/core';
import { Product } from '../products/products.component';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css'
})
export class ProductsCardComponent {
  @Input() product: Product = {
    id: 0,
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    }
  }
}
