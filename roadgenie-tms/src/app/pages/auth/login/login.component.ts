import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MockAuthService } from '../../../core/services/mock-auth.service';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class AuthLoginPage implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(MockAuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private snackBar = inject(MatSnackBar);

  loginForm!: FormGroup;
  isLoading = false;
  showPassword = false;
  returnUrl: string = '/dashboard';

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl(this.returnUrl);
      },
      error: () => {
        this.isLoading = false;
        this.snackBar.open('Invalid credentials. Use any email and min 6 char password.', 'Close', {
          duration: 4000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  onSocialLogin(provider: string): void {
    this.snackBar.open(`${provider} login is not implemented in this mock.`, 'OK', { duration: 3000 });
  }

  onForgotPassword(): void {
    this.snackBar.open('Password recovery is coming soon.', 'OK', { duration: 3000 });
  }
}
