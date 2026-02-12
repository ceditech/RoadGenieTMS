import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-app-shell',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule
    ],
    template: `
    <div class="app-container" [class.dark-theme]="isDarkMode">
      <a href="#main-content" class="skip-link">Skip to main content</a>

      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #drawer class="sidenav" fixedInViewport
            [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
            [mode]="(isHandset$ | async) ? 'over' : 'side'"
            [opened]="(isHandset$ | async) === false">
          
          <div class="brand-section">
            <div class="logo-box">
              <span class="material-icons-round text-white text-2xl">local_shipping</span>
            </div>
            <h1 class="text-xl font-800 tracking-tight">RoadGenie<span class="text-primary">TMS</span></h1>
          </div>

          <mat-nav-list>
            <a mat-list-item routerLink="/tms/loads" routerLinkActive="active-link">
              <mat-icon matListItemIcon>mail</mat-icon>
              <span matListItemTitle>Inbox</span>
            </a>
            <a mat-list-item routerLink="/settings" routerLinkActive="active-link">
              <mat-icon matListItemIcon>settings</mat-icon>
              <span matListItemTitle>Settings</span>
            </a>
          </mat-nav-list>

          <div class="user-info-placeholder">
            <div class="avatar"></div>
            <div class="details">
              <p class="name">Dispatcher Joe</p>
              <p class="role">EDXSTORE LLC</p>
            </div>
          </div>
        </mat-sidenav>

        <mat-sidenav-content>
          <mat-toolbar class="top-bar">
            <button
              type="button"
              aria-label="Toggle sidenav"
              mat-icon-button
              (click)="drawer.toggle()"
              *ngIf="isHandset$ | async">
              <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
            </button>
            
            <div class="flex-grow"></div>

            <button mat-icon-button (click)="toggleTheme()" aria-label="Toggle theme">
              <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>
            </button>
            <button mat-icon-button aria-label="Notifications">
              <mat-icon>notifications</mat-icon>
            </button>
          </mat-toolbar>

          <main id="main-content" class="main-content">
            <router-outlet></router-outlet>
          </main>

          <!-- Mobile Bottom Nav -->
          <nav class="mobile-nav" *ngIf="isHandset$ | async">
            <button routerLink="/tms/loads" routerLinkActive="active">
              <mat-icon>mail</mat-icon>
              <span>Inbox</span>
            </button>
            <button routerLink="/settings" routerLinkActive="active">
              <mat-icon>settings</mat-icon>
              <span>Settings</span>
            </button>
          </nav>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
    styles: [`
    .app-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .sidenav-container {
      height: 100%;
    }

    .sidenav {
      width: 260px;
      border-right: 1px solid var(--border);
      background-color: var(--surface);
    }

    .brand-section {
      padding: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .logo-box {
      width: 40px;
      height: 40px;
      background-color: var(--primary);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.2);
    }

    .active-link {
      color: var(--primary) !important;
      background-color: rgba(var(--primary-rgb), 0.05);
      border-right: 3px solid var(--primary);
    }

    .top-bar {
      background-color: transparent !important;
      border-bottom: 1px solid var(--border);
      height: 64px;
    }

    .main-content {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    .user-info-placeholder {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 20px;
      border-top: 1px solid var(--border);
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--border);
    }

    .details .name {
      font-weight: 700;
      font-size: 0.875rem;
      margin: 0;
    }

    .details .role {
      font-size: 0.75rem;
      color: var(--muted);
      margin: 0;
    }

    .mobile-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 80px;
      background: rgba(var(--surface-rgb), 0.8);
      backdrop-filter: blur(12px);
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-bottom: 20px;
      z-index: 100;
    }

    .mobile-nav button {
      background: none;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--muted);
      gap: 4px;
    }

    .mobile-nav button.active {
      color: var(--primary);
    }

    .mobile-nav button span {
      font-size: 0.625rem;
      font-weight: 700;
    }

    @media (max-width: 959px) {
      .main-content {
        padding: 16px;
        padding-bottom: 100px;
      }
    }
  `]
})
export class AppShellComponent {
    private breakpointObserver = inject(BreakpointObserver);
    isDarkMode = false;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        if (this.isDarkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }
}
