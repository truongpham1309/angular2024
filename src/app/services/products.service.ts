import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
// Call API
  private apiUrl = "https://fakestoreapi.com/products";

  // private http = inject(HttpClient);

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  getDetailProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  removeProduct(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`);
  }
}
