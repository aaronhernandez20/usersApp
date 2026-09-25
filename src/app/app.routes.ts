import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
  path: 'usuarios',
  loadComponent: () => import('./pages/users/users.page').then(m => m.UsersPage)
,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];