import { Component, OnInit } from '@angular/core';
import { Product } from '../../../types/products';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ProductsService } from '../../../services/products.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-create',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, ToastrModule, CommonModule],
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css'
})
export class ProductsCreateComponent implements OnInit {

  Category: string[] = [];
  
  constructor(private Product: ProductsService) {}
  ngOnInit(): void {
    this.Product.getAllCategory().subscribe(data => {
      this.Category = data;
    })
  }
  productCreate: Omit<Product, "_id"> = {
    title: "",
    price: 0,
    image: "",
    description: "",
    rate: 0,
    category: "",
  }

  handleSubmit() {
    this.Product.createProduct(this.productCreate);
  }
}
