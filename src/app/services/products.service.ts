import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // Call API
  private apiUrl = "http://localhost:8000/products";

  // private http = inject(HttpClient);

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTIzMGU4YmM5ZDNkNGNkOTVmMDZkOCIsImlhdCI6MTcwNTEyODE5NywiZXhwIjoxNzA1MjE0NTk3fQ.blqoThl4V_pJQ2z4YS7pgfsCVqEh6NdOhAoiM35F24M';  // Thay YOUR_AUTH_TOKEN bằng token thực tế của bạn
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

  removeProduct(id: string[]): Observable<any> {

    const headers = this.getHeaders();
    const options = {
      headers,
    }
    return this.http.delete(`${this.apiUrl}/${id}`, options);
  }
}
