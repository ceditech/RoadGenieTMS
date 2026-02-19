import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BottomNavComponent } from '../bottom-nav/rg-bottom-nav.component';
import { MockAuthService } from '../../core/services/mock-auth.service';

@Component({
  selector: 'app-app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    SidebarComponent,
    BottomNavComponent
  ],
  template: `
    <mat-sidenav-container class="shell-container">
      <mat-sidenav #drawer
        class="sidenav"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="(isHandset$ | async) === false"
      >
        <app-sidebar></app-sidebar>
      </mat-sidenav>

      <mat-sidenav-content class="content-wrapper">
        <app-header 
          [isDarkMode]="isDarkMode"
          [userEmail]="(currentUser$ | async)?.email || ''"
          (menuClick)="drawer.toggle()"
          (toggleTheme)="toggleTheme()"
          (logout)="onLogout()"
        ></app-header>
        
        <main class="page-content">
          <router-outlet></router-outlet>
        </main>

        <app-bottom-nav *ngIf="isHandset$ | async"></app-bottom-nav>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .shell-container { height: 100vh; }
    .sidenav { width: 280px; border-right: 1px solid var(--border); }
    .content-wrapper { display: flex; flex-direction: column; background: var(--bg); }
    .page-content { flex: 1; overflow-y: auto; }
  `]
})
export class AppShellComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private authService = inject(MockAuthService);
  private router = inject(Router);

  isDarkMode = false;
  currentUser$ = this.authService.currentUser$;

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

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
