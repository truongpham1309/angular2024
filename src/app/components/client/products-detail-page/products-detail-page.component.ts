import { Component, OnInit } from '@angular/core';
import { Product } from '../../../types/products';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsRateComponent } from '../products-rate/products-rate.component';
import { map, switchMap } from 'rxjs';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products-detail-page',
  standalone: true,
  imports: [ProductsRateComponent, ProductsCardComponent, NgFor],
  templateUrl: './products-detail-page.component.html',
  styleUrl: './products-detail-page.component.css'
})
export class ProductsDetailPageComponent implements OnInit {
  productID: number = 0;

  productsRelated: Product[] = [];
  productsAll: Product[] = [];

  product: Product = {
    id: 0,
    title: "",
    image: "",
    category: "",
    description: "",
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    }
  }

  constructor(private ProductService: ProductsService, private route: ActivatedRoute) {
    this.ProductService.getAllProducts().subscribe(data => {
      this.productsAll = data;

      console.log(this.productsAll);
    })
   }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const idPr = params.get('idPr');
      this.productID = Number(idPr);

      this.getProductDetailsAndRelateProducts();
    });
    
  }



  getProductDetailsAndRelateProducts() {
    this.ProductService.getDetailProduct(this.productID).pipe(
      switchMap(productData => {
        return this.ProductService.getProductsRelatedToCategory(productData.category)
          .pipe(map(relatedProducts => ({ productData, relatedProducts })));
      })
    ).subscribe(({ productData, relatedProducts }) => {
      this.product = productData;
      this.productsRelated = relatedProducts.filter(pr => pr.id !== this.productID);
    })
  }
}
