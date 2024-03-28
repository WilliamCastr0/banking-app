import { Routes } from '@angular/router';

import { authnGuard } from './auth/authn.guard';

import { AccountsComponent } from './components/accounts/accounts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { LayoutMenuComponent } from './layouts/layout-menu/layout-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutMenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'accounts',
        canActivate: [authnGuard],
        component: AccountsComponent,
        title: 'Accounts',
      },
      {
        path: 'dashboard',
        canActivate: [authnGuard],
        component: DashboardComponent,
        title: 'Dashboard',
      },
      {
        path: 'profile',
        canActivate: [authnGuard],
        component: ProfileComponent,
        title: 'Profile',
      },

      {
        path: 'transactions',
        canActivate: [authnGuard],
        component: TransactionsComponent,
        title: 'Transactions',
      },
      {
        path: 'transactions/all',
        canActivate: [authnGuard],
        component: TransactionListComponent,
        title: 'Todas mis transferencias',
      },
      {
        path: 'transactions/:id',
        canActivate: [authnGuard],
        component: TransactionDetailComponent,
        title: 'Detalle de transferencia',
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    title: 'Sign Up',
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
