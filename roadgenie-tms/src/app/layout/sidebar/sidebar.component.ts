import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, MatListModule, MatIconModule, RouterLink, RouterLinkActive],
    template: `
    <mat-nav-list class="sidebar">
      <div class="sidebar-header">
        <img src="assets/logo.png" alt="RG" class="logo" onerror="this.style.display='none'">
      </div>
      
      <a mat-list-item routerLink="/dashboard" routerLinkActive="active-link shadow-glow">
        <mat-icon matListItemIcon>dashboard</mat-icon>
        <span matListItemTitle>Dashboard</span>
      </a>

      <div class="section-title">TMS</div>
      <a mat-list-item routerLink="/tms/loads" routerLinkActive="active-link shadow-glow">
        <mat-icon matListItemIcon>mail</mat-icon>
        <span matListItemTitle>Inbox</span>
      </a>
      <a mat-list-item routerLink="/tms/drivers" routerLinkActive="active-link shadow-glow">
        <mat-icon matListItemIcon>group</mat-icon>
        <span matListItemTitle>Drivers</span>
      </a>
      <a mat-list-item routerLink="/tms/documents" routerLinkActive="active-link shadow-glow">
        <mat-icon matListItemIcon>description</mat-icon>
        <span matListItemTitle>Documents</span>
      </a>

      <div class="spacer"></div>
      
      <a mat-list-item routerLink="/settings" routerLinkActive="active-link shadow-glow">
        <mat-icon matListItemIcon>settings</mat-icon>
        <span matListItemTitle>Settings</span>
      </a>
    </mat-nav-list>
  `,
    styles: [`
    .sidebar { height: 100%; display: flex; flex-direction: column; background: var(--surface); }
    .sidebar-header { padding: 24px; }
    .section-title { padding: 16px 24px 8px; font-size: 0.75rem; font-weight: 700; color: var(--muted); text-transform: uppercase; }
    .active-link { background: rgba(var(--primary-rgb), 0.1) !important; color: var(--primary) !important; }
    .spacer { flex: 1; }
  `]
})
export class SidebarComponent { }
