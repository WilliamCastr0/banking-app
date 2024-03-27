import { Component } from '@angular/core';

import { MoneyCardComponent } from '../shared/money-card/money-card.component';
import { AccountCardComponent } from '../shared/account-card/account-card.component';
import { TransactionCardComponent } from '../shared/transaction-card/transaction-card.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MoneyCardComponent,
    AccountCardComponent,
    TransactionCardComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
