import { Component } from '@angular/core';
import { DocumentWebsiteService } from '../services/documentwebsiteservice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(public documentWebsiteService: DocumentWebsiteService, private router: Router) { }

  onSubmit(): void {

    if (this.email && this.password) {
      // Send credentials to the backend for validation
      this.documentWebsiteService.validateUser(this.email, this.password).subscribe({
        next: (response) => {
          alert('Login successful!'),
            this.router.navigate(['/document-list'])
              .then(success => console.log('Navigation successful:', success))
              .catch(error => console.error(' Navigation failed:', error));
        },
        error: (error) => {
          console.error('Login failed', error);
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Please enter both email and password.';
    }
  }
}
