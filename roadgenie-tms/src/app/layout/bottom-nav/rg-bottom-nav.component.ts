import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="bottom-nav">
      <a routerLink="/tms/loads" routerLinkActive="active" class="nav-item">
        <mat-icon>mail</mat-icon>
        <span>Inbox</span>
      </a>
      <a routerLink="/settings" routerLinkActive="active" class="nav-item">
        <mat-icon>settings</mat-icon>
        <span>Settings</span>
      </a>
    </nav>
  `,
  styles: [`
    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 64px;
      background: var(--surface);
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 1000;
    }
    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--muted);
      text-decoration: none;
      font-size: 0.75rem;
      gap: 4px;
      &.active { color: var(--primary); }
    }
  `]
})
export class BottomNavComponent {
  @Input() activeTab: string = '';
  @Output() tabChange = new EventEmitter<string>();
}
