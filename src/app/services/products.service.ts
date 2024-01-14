import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types/products';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // Call API
  private apiUrl = "http://localhost:8000/products";

  // private http = inject(HttpClient);

  constructor(private http: HttpClient, private route: Router) {}

  private getHeaders(): HttpHeaders {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTIzMGU4YmM5ZDNkNGNkOTVmMDZkOCIsImlhdCI6MTcwNTI0MTk3MCwiZXhwIjoxNzA1MzI4MzcwfQ.orXbt6Q9yqtPFzET6le8SMwmGagVYYz-TjYbCM9kc3k';  // Thay YOUR_AUTH_TOKEN bằng token thực tế của bạn
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    });
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getDetailProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getProductsRelatedToCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`);
  }

  getAllCategory(): Observable<string[]> {
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  createProduct(newProduct: Omit<Product, "_id">): void {
    const options = {
      headers: this.getHeaders(), 
    }
    this.http.post<Product>(`${this.apiUrl}`, newProduct, options).subscribe(() => {
      this.route.navigate(['/admin/products'])
    })
  }

  removeProduct(id: string[]): Observable<any> {

    const headers = this.getHeaders();
    const options = {
      headers,
    }
    return this.http.delete(`${this.apiUrl}/${id}`, options);
  }
}
