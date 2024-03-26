import { Routes } from '@angular/router';

import { AccountsComponent } from './components/accounts/accounts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

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
];

export default routeConfig;
