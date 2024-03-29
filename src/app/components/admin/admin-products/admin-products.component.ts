import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../types/products';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: Product[] = [];

  idPr: string = "";

  constructor(private Product: ProductsService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.Product.getAllProducts().subscribe(data => {
      this.products = data
    })


  }
  handleRemoveProduct(id: string): void {
    if (!confirm('Are you sure you want to remove?')) return;

    this.Product.removeProduct([id]).subscribe(
      () => {
        // alert('Product removed successfully.');
        this.toastr.success("Product removed successfully!", "Success!");

        this.ngOnInit();
        // Gọi các bước cần thiết sau khi xóa sản phẩm thành công
      },
      (error) => {
        console.error('Error removing product:', error);
        // Xử lý lỗi nếu cần
      }
    );

  }


}
