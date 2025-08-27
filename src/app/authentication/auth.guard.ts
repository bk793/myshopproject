import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  canActivate(): boolean {
    console.log("Auth Guard triggered");
    if (isPlatformBrowser(this.platformId) && this.authService.isLoggedIn()) {
        console.log("User is logged in, allowing access");
      return true; // ✅ Allow access only in browser
    } else {
        console.log("User not logged in, redirecting to login"); 
      this.router.navigate(['/login']); // ✅ Redirect to login
      return false;
    }
  }
}
