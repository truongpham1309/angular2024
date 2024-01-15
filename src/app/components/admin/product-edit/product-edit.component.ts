import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../types/products';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
  productUpdate: Product = {
    _id: "",
    title: "",
    price: 0,
    image: "",
    category: "",
    description: "",
    rate: 0,
  };
  Category: string[] = [];
  idPr: string = "";

  newProduct: Omit<Product, "_id"> = {
    title: "",
    price: 0,
    image: "",
    category: "",
    description: "",
    rate: 0,
  }

  constructor(private ProductService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.idPr = String(params.get('idPr'));
    })
    this.ProductService.getDetailProduct(this.idPr).subscribe(data => {
      this.productUpdate = data;
    })

    this.ProductService.getAllCategory().subscribe(data => {
      this.Category = data;
    })
  }

  handleSubmit() {
    console.log(this.productUpdate);
    const { title, price, image, category, description, rate } = this.productUpdate;
    this.ProductService.updateProduct({ title, price, image, category, description, rate }, this.productUpdate._id)
  }


}
