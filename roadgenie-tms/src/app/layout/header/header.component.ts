import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule, RouterModule],
  template: `
    <mat-toolbar class="header">
      <button mat-icon-button (click)="menuClick.emit()" class="menu-button">
        <mat-icon>menu</mat-icon>
      </button>
      <span class="brand">RoadGenie TMS</span>
      <span class="spacer"></span>
      
      <button mat-icon-button (click)="toggleTheme.emit()">
        <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>
      </button>
      
      <button mat-icon-button>
        <mat-icon>notifications</mat-icon>
      </button>

      <button mat-icon-button [matMenuTriggerFor]="userMenu" class="user-btn">
        <img [src]="userAvatar" alt="User" class="avatar" (error)="setDefaultAvatar()">
      </button>

      <mat-menu #userMenu="matMenu">
        <div class="menu-header">
          <p class="user-email">{{ userEmail }}</p>
          <p class="user-role">Fleet Owner</p>
        </div>
        <mat-divider></mat-divider>
        <button mat-menu-item routerLink="/settings">
          <mat-icon>settings</mat-icon>
          <span>Settings</span>
        </button>
        <button mat-menu-item (click)="logout.emit()">
          <mat-icon>logout</mat-icon>
          <span>Logout</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    .header { background: var(--surface); color: var(--text); border-bottom: 1px solid var(--border); }
    .spacer { flex: 1 1 auto; }
    .brand { font-weight: 800; font-size: 1.25rem; }
    .avatar { width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--border); }
    .menu-header { padding: 12px 16px; }
    .user-email { margin: 0; font-weight: 600; font-size: 0.875rem; }
    .user-role { margin: 0; font-size: 0.75rem; color: var(--muted); }
  `]
})
export class HeaderComponent {
  @Input() isDarkMode = false;
  @Input() userEmail = '';
  @Input() userAvatar = 'assets/avatar-placeholder.png';
  @Output() menuClick = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  setDefaultAvatar() {
    this.userAvatar = `https://ui-avatars.com/api/?name=${this.userEmail || 'User'}&background=random`;
  }
}
