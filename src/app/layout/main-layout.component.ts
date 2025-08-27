import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../authentication/auth.service';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  imports: [CommonModule, RouterModule]
})
export class MainLayoutComponent {
  currentRoute = '';

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  isLoginPage(): boolean {
    return this.currentRoute === '/' || this.currentRoute === '/login';
  }

  logout(): void {
    this.authService.logout(); // ✅ Logs out user
  }
}
