import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../../types/products';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css'
})
export class ProductsCreateComponent implements OnInit {

  Category: string[] = [];
  toastr = inject(ToastrService);

  constructor(private Product: ProductsService) { }
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

  validateFormProduct(product: Omit<Product, "_id">) {
    let valid: boolean = false;
    if (product.title.trim().length === 0) {
      valid = true;
      this.toastr.error("Title is required!");
    }
    if (product.description.trim().length === 0) {
      valid = true;
      this.toastr.error("Description is required!");
    }
    if (product.price <= 0) {
      valid = true;
      this.toastr.error("Price is greater than 0!");
    }
    if(product.rate <= 0 ) {
      valid = true;
      this.toastr.error("Rate is greater than 0!");
    }
    if(product.category.trim().length === 0) {
      valid = true;
      this.toastr.error("Category is required!");
    }
    if(product.image.trim().length === 0) {
      valid = true;
      this.toastr.error("Image is required!");
    }

    return valid;
  }

  handleSubmit() {

    if(this.validateFormProduct(this.productCreate)) return;

    this.Product.createProduct(this.productCreate);
  }
}
