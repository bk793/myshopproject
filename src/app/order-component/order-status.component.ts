import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: [],
  imports: [CommonModule]
})
export class OrderStatusComponent {
  orders = [
    { id: 101, product: 'Shirt', status: 'Shipped' },
    { id: 102, product: 'Jeans', status: 'Processing' }
  ];
}
