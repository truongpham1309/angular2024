import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../types/products';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit {

  products: Product[] = [];

  idPr: number = 0;

  constructor(private Product: ProductsService) { }
  ngOnInit(): void {
    this.Product.getAllProducts().subscribe(data => {
      this.products = data
    })


  }
  handleRemoveProduct(id: number): void {
    if (!confirm('Are you sure you want to remove?')) return;


    this.products = this.products.filter(p => p.id !== id);
   
  }


}
