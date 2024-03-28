import { Routes } from '@angular/router';

import { AccountsComponent } from './components/accounts/accounts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';

const routeConfig: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    title: 'Accounts',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile',
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    title: 'Sign Up',
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
    title: 'Transactions',
  },
  {
    path: 'transactions/all',
    component: TransactionListComponent,
    title: 'Todas mis transferencias',
  },
  {
    path: 'transactions/:id',
    component: TransactionDetailComponent,
    title: 'Detalle de transferencia',
  },
];

export default routeConfig;
