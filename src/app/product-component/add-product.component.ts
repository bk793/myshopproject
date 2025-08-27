import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product-service/product.services';

@Component({
  standalone: true,
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  imports: [CommonModule, FormsModule]
})
export class AddProductComponent {
  product = { name: '', price: 0 };

  constructor(private productService: ProductService) {}

  addProduct(): void {
    this.productService.addProduct(this.product).subscribe((response) => {
      console.log('Product added successfully!', response);
    });
}
}
