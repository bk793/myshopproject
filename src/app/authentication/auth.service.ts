import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) { // ✅ Check if running in browser
      return !!localStorage.getItem('userSession');
    }
    return false; // ✅ Prevent SSR from accessing localStorage
  }

  logout(): void {
  localStorage.removeItem('userSession'); // ✅ Clears session
  window.location.href = '/login'; // ✅ Redirects to login page
}
}
