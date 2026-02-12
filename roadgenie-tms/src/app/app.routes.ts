import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { AppShellComponent } from './layout/app-shell/app-shell.component';
import { LoadsInboxComponent } from './features/tms/loads/loads-inbox/loads-inbox.component';
import { UserSettingsComponent } from './features/settings/user-settings/user-settings.component';

export const routes: Routes = [
    { path: 'auth/login', component: LoginComponent },
    {
        path: '',
        component: AppShellComponent,
        children: [
            { path: 'tms/loads', component: LoadsInboxComponent },
            { path: 'settings', component: UserSettingsComponent },
            { path: '', redirectTo: 'tms/loads', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: 'auth/login' }
];

