import { Routes } from '@angular/router';
import { TmsShellComponent } from './layout/tms-shell/tms-shell.component';
import { mockAuthGuard } from './core/guards/mock-auth.guard';

// Pages
import { DashboardPageComponent } from './pages/dashboard/dashboard.page';
import { AuthLoginPage } from './pages/auth/login/login.component';
import { AuthRegisterPage } from './pages/auth/register/register.page';
import { InboxPage } from './pages/loads/inbox/loads-inbox.component';
import { MyLoadsPage } from './pages/loads/my-loads/my-loads.page';
import { PostLoadStep1Page } from './pages/loads/post-load/step-1/step-1.page';
import { PostLoadStep2Page } from './pages/loads/post-load/step-2/step-2.page';
import { PostLoadStep3Page } from './pages/loads/post-load/step-3/step-3.page';
import { DriversListPage } from './pages/drivers/list/drivers-list.page';
import { DriverDetailsPage } from './pages/drivers/details/driver-details.page';
import { DriverEditPage } from './pages/drivers/edit/driver-edit.page';
import { DocumentsPage } from './pages/documents/documents.page';
import { SettingsPage } from './pages/settings/user-settings.component';

import { LoadsPage } from './pages/loads/loads.page';

export const routes: Routes = [
    // Public
    { path: 'login', component: AuthLoginPage },
    { path: 'register', component: AuthRegisterPage },

    // Protected (TMS Shell)
    {
        path: '',
        component: TmsShellComponent,
        canActivate: [mockAuthGuard],
        children: [
            { path: 'dashboard', component: DashboardPageComponent },
            { path: 'loads', component: LoadsPage },
            { path: 'drivers', component: DriversListPage },
            { path: 'drivers/:id', component: DriverDetailsPage },
            { path: 'drivers/:id/edit', component: DriverEditPage },
            { path: 'accounting', redirectTo: 'dashboard' }, // Placeholder
            { path: 'settings', component: SettingsPage },
            { path: 'support', redirectTo: 'dashboard' }, // Placeholder
            { path: 'documents', component: DocumentsPage },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },

    // Fallback
    { path: '**', redirectTo: 'login' }
];
