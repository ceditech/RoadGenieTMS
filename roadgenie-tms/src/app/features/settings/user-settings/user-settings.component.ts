import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-user-settings',
    standalone: true,
    imports: [CommonModule, MatSlideToggleModule, MatIconModule, MatButtonModule, MatDividerModule],
    template: `
    <div class="settings-container max-w-2xl">
      <header class="mb-8">
        <h1 class="text-3xl font-800 tracking-tight">Settings</h1>
        <p class="text-slate-500 mt-1">Manage your account and app preferences</p>
      </header>

      <section class="space-y-6">
        <!-- Appearance -->
        <div>
          <h2 class="text-lg font-bold mb-4 flex items-center gap-2">
            <mat-icon class="text-primary">palette</mat-icon>
            Appearance
          </h2>
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div class="p-4 flex items-center justify-between">
              <div>
                <p class="font-bold">Dark Mode</p>
                <p class="text-sm text-slate-500">Enable dark theme for the application</p>
              </div>
              <mat-slide-toggle color="primary" [checked]="isDarkMode" (change)="toggleDarkMode()"></mat-slide-toggle>
            </div>
            <mat-divider></mat-divider>
            <div class="p-4 flex items-center justify-between">
              <div>
                <p class="font-bold">High Contrast</p>
                <p class="text-sm text-slate-500 font-medium text-amber-600 dark:text-amber-400">Placeholder - for ADA Phase 2</p>
              </div>
              <mat-slide-toggle disabled></mat-slide-toggle>
            </div>
          </div>
        </div>

        <!-- Notifications -->
        <div>
          <h2 class="text-lg font-bold mb-4 flex items-center gap-2">
            <mat-icon class="text-primary">notifications</mat-icon>
            Notifications
          </h2>
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div class="p-4 flex items-center justify-between">
              <div>
                <p class="font-bold">New Load Alerts</p>
                <p class="text-sm text-slate-500">Get notified when new loads match your criteria</p>
              </div>
              <mat-slide-toggle color="primary" checked></mat-slide-toggle>
            </div>
            <mat-divider></mat-divider>
            <div class="p-4 flex items-center justify-between">
              <div>
                <p class="font-bold">Negotiation Updates</p>
                <p class="text-sm text-slate-500">Receive alerts for counter-offers and bookings</p>
              </div>
              <mat-slide-toggle color="primary" checked></mat-slide-toggle>
            </div>
          </div>
        </div>

        <!-- Account -->
        <div>
          <h2 class="text-lg font-bold mb-4 flex items-center gap-2">
            <mat-icon class="text-primary">person</mat-icon>
            Account
          </h2>
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center text-center">
            <div class="w-20 h-20 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
              <mat-icon class="text-4xl text-slate-400">person</mat-icon>
            </div>
            <h3 class="text-xl font-bold">Dispatcher Joe</h3>
            <p class="text-slate-500 mb-6">joe&#64;edxstore.com</p>
            <button mat-flat-button color="warn" class="w-full !h-12 !rounded-lg !font-bold">
              Sign Out
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
    styles: [`
    .settings-container {
      margin: 0 auto;
    }
  `]
})
export class UserSettingsComponent {
    isDarkMode = false;

    constructor() {
        this.isDarkMode = document.body.classList.contains('dark-theme');
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        if (this.isDarkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }
}
