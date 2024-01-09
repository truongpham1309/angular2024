import { Component, OnInit } from '@angular/core';
import { Product } from '../../../types/products';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsRateComponent } from '../products-rate/products-rate.component';

@Component({
  selector: 'app-products-detail-page',
  standalone: true,
  imports: [ProductsRateComponent],
  templateUrl: './products-detail-page.component.html',
  styleUrl: './products-detail-page.component.css'
})
export class ProductsDetailPageComponent implements OnInit {
  productID: number = 0;
  constructor(private ProductService: ProductsService, private route: ActivatedRoute) { }
  ngOnInit(): void {



    this.route.paramMap.subscribe(params => {
      const idPr = params.get('idPr');
      this.productID = Number(idPr);
    });

    this.ProductService.getDetailProduct(this.productID).subscribe(data => {
      this.product = data;
    })
  }
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




}
