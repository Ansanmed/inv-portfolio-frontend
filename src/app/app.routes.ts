import { Router, Routes } from '@angular/router';
import { inject } from '@angular/core';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { AuthService } from './features/auth/services/auth.service';
import { DashboardComponent } from './features/dashboard/components/dashboard/dashboard.component';
import { authGuard } from './features/auth/guards/auth.guard';

export const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [
      (): boolean => {
        const authService = inject(AuthService);
        const router = inject(Router);
        if (authService.isAuthenticated()) {
          router.navigate(['/dashboard']);
          return false;
        }
        return true;
      },
    ],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [
      (): boolean => {
        const authService = inject(AuthService);
        const router = inject(Router);
        if (authService.isAuthenticated()) {
          router.navigate(['/dashboard']);
          return false;
        }
        return true;
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '' },
];
