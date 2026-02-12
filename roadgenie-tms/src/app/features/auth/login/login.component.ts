import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  showPassword = false;
  isLoading = false;
  showSuccessBanner = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rememberMe: [false]
  });

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;

      // Step B.3: 800ms loading state
      setTimeout(() => {
        this.isLoading = false;
        this.showSuccessBanner = true;
        console.log('Mock login successful:', this.loginForm.value);

        // Auto-hide banner after 3 seconds
        setTimeout(() => {
          this.showSuccessBanner = false;
        }, 3000);
      }, 800);
    }
  }
}
