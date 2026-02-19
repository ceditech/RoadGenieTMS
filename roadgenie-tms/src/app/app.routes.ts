import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/app-shell/app-shell.component';
import { mockAuthGuard } from './core/guards/mock-auth.guard';

// Pages
import { DashboardPage } from './pages/dashboard/dashboard.page';
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

export const routes: Routes = [
    // Public
    { path: 'login', component: AuthLoginPage },
    { path: 'register', component: AuthRegisterPage },

    // Protected (AppShell)
    {
        path: '',
        component: AppShellComponent,
        canActivate: [mockAuthGuard],
        children: [
            { path: 'dashboard', component: DashboardPage },
            { path: 'tms/loads', component: InboxPage },
            { path: 'tms/loads/my', component: MyLoadsPage },
            { path: 'tms/loads/post/1', component: PostLoadStep1Page },
            { path: 'tms/loads/post/2', component: PostLoadStep2Page },
            { path: 'tms/loads/post/3', component: PostLoadStep3Page },
            { path: 'tms/drivers', component: DriversListPage },
            { path: 'tms/drivers/:id', component: DriverDetailsPage },
            { path: 'tms/drivers/:id/edit', component: DriverEditPage },
            { path: 'tms/documents', component: DocumentsPage },
            { path: 'settings', component: SettingsPage },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },

    // Fallback
    { path: '**', redirectTo: 'login' }
];
