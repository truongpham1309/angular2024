import { Component, Input } from '@angular/core';
import { Product } from '../../../types/products';
import { ProductsRateComponent } from '../products-rate/products-rate.component';
import { RouterLink } from '@angular/router';
import { DescriptionPipe } from '../../../pipes/description.pipe';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [ProductsRateComponent, RouterLink, DescriptionPipe],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css'

})
export class ProductsCardComponent {
  @Input() product: Product = {
    _id: "",
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
    rate: 0,
  }
}
