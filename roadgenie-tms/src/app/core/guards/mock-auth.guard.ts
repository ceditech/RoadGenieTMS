import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { MockAuthService } from '../services/mock-auth.service';
import { map, take } from 'rxjs';

export const mockAuthGuard: CanActivateFn = (route, state) => {
    const authService = inject(MockAuthService);
    const router = inject(Router);

    return authService.isLoggedIn$.pipe(
        take(1),
        map(isLoggedIn => {
            if (isLoggedIn) {
                return true;
            }

            // Redirect to login with returnUrl
            router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        })
    );
};
