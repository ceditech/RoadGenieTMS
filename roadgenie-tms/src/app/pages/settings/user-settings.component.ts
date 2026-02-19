import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, MatIconModule, MatButtonModule, MatDividerModule],
  template: `
    <div class="settings-container max-w-2xl px-4 py-8">
      <header class="mb-8">
        <h1 class="text-3xl font-bold tracking-tight">Settings</h1>
        <p class="text-muted mt-1">Manage your account and app preferences</p>
      </header>

      <section class="space-y-6">
        <div>
          <h2 class="text-lg font-bold mb-4 flex items-center gap-2">
            <mat-icon color="primary">palette</mat-icon> Appearance
          </h2>
          <div class="bg-surface rounded-xl border border-border overflow-hidden">
            <div class="p-4 flex items-center justify-between">
              <div>
                <p class="font-bold">Dark Mode</p>
                <p class="text-sm text-muted">Enable dark theme for the application</p>
              </div>
              <mat-slide-toggle color="primary" [checked]="isDarkMode" (change)="toggleDarkMode()"></mat-slide-toggle>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`.settings-container { margin: 0 auto; }`]
})
export class SettingsPage {
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
