import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: [],
  imports: [CommonModule]
})
export class OrderSummaryComponent {
  summary = [
    { product: 'Shirt', quantity: 2, status: 'Pending' },
    { product: 'Jeans', quantity: 1, status: 'Completed' }
  ];
}
