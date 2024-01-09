import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../types/products';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsCardComponent, NgFor],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: Product[] = [];

  constructor(private ProductService: ProductsService){}

  ngOnInit(): void {
    this.ProductService.getAllProducts().subscribe(data => this.productsList = data);
  }

}
