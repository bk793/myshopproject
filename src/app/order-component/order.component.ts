import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: [],
  imports: [CommonModule, FormsModule]
})
export class OrderComponent {
  order = { product: '', quantity: 1 };

  placeOrder(): void {
    console.log('Order placed:', this.order);
  }
}
