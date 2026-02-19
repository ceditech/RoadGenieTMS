import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, delay, tap } from 'rxjs';

export interface User {
    email: string;
    role: string;
}

@Injectable({
    providedIn: 'root'
})
export class MockAuthService {
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    private currentUserSubject = new BehaviorSubject<User | null>(null);

    isLoggedIn$ = this.isLoggedInSubject.asObservable();
    currentUser$ = this.currentUserSubject.asObservable();

    login(email: string, password: string): Observable<void> {
        // Simulate delay
        return of(void 0).pipe(
            delay(Math.floor(Math.random() * (600 - 300 + 1) + 300)),
            tap(() => {
                this.isLoggedInSubject.next(true);
                this.currentUserSubject.next({ email, role: 'owner' });
            })
        );
    }

    register(email: string, password: string): Observable<void> {
        // Simulate delay
        return of(void 0).pipe(
            delay(Math.floor(Math.random() * (600 - 300 + 1) + 300)),
            tap(() => {
                this.isLoggedInSubject.next(true);
                this.currentUserSubject.next({ email, role: 'owner' });
            })
        );
    }

    logout(): void {
        this.isLoggedInSubject.next(false);
        this.currentUserSubject.next(null);
    }

    get isLoggedIn(): boolean {
        return this.isLoggedInSubject.value;
    }
}
