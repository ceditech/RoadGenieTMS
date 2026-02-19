import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MockAuthService } from '../../core/services/mock-auth.service';

@Component({
    selector: 'app-tms-shell',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './tms-shell.component.html',
    styleUrls: ['./tms-shell.component.scss']
})
export class TmsShellComponent {
    private authService = inject(MockAuthService);
    private router = inject(Router);

    currentUser$ = this.authService.currentUser$;

    user = {
        name: 'Alex Rivers',
        role: 'Fleet Manager',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjhc8X8sODRnD21LgPfn41OcFebwPMYgYq_FDQ3L3YPpVLsFsabQA65IYP6WdYGxEt2MxqfpSo68QOZPgMcWnSR9o0Mz55tbNaWD0QYn-1zTFMtbNHKSWJqn17ulc3LuKnrE2Z3TYXs1iD0iPcgf2d9k7O78LonZ4dcrCVlqZC6abA1NwfgMDlTzQBfNm3unF4luKcpwvet5UOO2zkFzcAeJ221F7GCegJ8VNy9_y_Z3MKAhF1DMhuSnHgxQuf4lW8Ehpnw-pYWei8'
    };

    systemStatus = {
        isLive: true,
        apiStatus: 'Operational',
        dbLatency: '12ms',
        version: 'v4.2.0-stable'
    };

    notificationsHasUnread = true;

    onLogout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    toggleTheme(): void {
        // Current requirement is Dark Mode parity with Stitch.
        // If we want a toggle, we can implement it here.
        document.documentElement.classList.toggle('dark');
    }
}
