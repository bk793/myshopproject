import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  imports: [CommonModule]
})
export class ViewProductComponent implements OnInit {
  products: any[] = []; // ✅ Array to store fetched products

  constructor(private http: HttpClient) {} // ✅ Inject HttpClient

  ngOnInit(): void {
    this.getProducts(); // ✅ Fetch products on component load
  }

  getProducts(): void {
    this.http.get<any[]>('http://localhost:8080/api/products') // ✅ Call backend API
      .subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (err) => {
          console.error('Error fetching products:', err);
        }
      });
  }
}
