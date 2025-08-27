import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterModule] // ✅ Ensure MainLayoutComponent is imported
})
export class AppComponent {
  showHeader = true;

  
}