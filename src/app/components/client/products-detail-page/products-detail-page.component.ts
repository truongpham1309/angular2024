import { Component, OnInit } from '@angular/core';
import { Product } from '../../../types/products';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsRateComponent } from '../products-rate/products-rate.component';
import { map, switchMap } from 'rxjs';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-products-detail-page',
  standalone: true,
  imports: [ProductsRateComponent, ProductsCardComponent, CommonModule],
  templateUrl: './products-detail-page.component.html',
  styleUrl: './products-detail-page.component.css'
})
export class ProductsDetailPageComponent implements OnInit {
  productID: string = "";

  productsRelated: Product[] = [];
  productsAll: Product[] = [];

  product: Product = {
    _id: "",
    title: "",
    image: "",
    category: "",
    description: "",
    price: 0,
    rate: 0,
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
      this.productID = String(idPr);

      this.ProductService.getDetailProduct(this.productID).subscribe(data => {
        this.product = data;
      })
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
      this.productsRelated = relatedProducts.filter(pr => pr._id !== this.productID);
    })
  }
}
