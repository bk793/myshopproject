import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // ✅ Import Router
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  user = { userId: '', password: '' };
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {} // ✅ Inject Router

  login(): void {
  this.http.post<boolean>('http://localhost:8080/api/users/login', this.user)
    .subscribe({
      next: (isValid) => {
        if (isValid) {
          console.log('Login successful!');
          localStorage.setItem('userSession', JSON.stringify(this.user)); // ✅ Store session
          this.errorMessage = '';
          this.router.navigate(['/welcome']); // ✅ Redirect to Welcome Page
        } else {
          this.errorMessage = 'Invalid credentials, please try again.';
        }
      },
      error: (err) => {
        console.error('Error:', err);
        this.errorMessage = err.error.message;
      }
    });
}
}
