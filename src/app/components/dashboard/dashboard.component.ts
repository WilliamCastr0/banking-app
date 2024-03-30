import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

import { MoneyCardComponent } from '../shared/money-card/money-card.component';
import { AccountCardComponent } from '../shared/account-card/account-card.component';
import { TransactionCardComponent } from '../shared/transaction-card/transaction-card.component';

import { TransactionStore } from '../../transaction.store';
import { Transaction } from '../../types/transaction';
import { UserStore } from '../../user/user.store';
import User from '../../types/user';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MoneyCardComponent,
    AccountCardComponent,
    TransactionCardComponent,
    RouterOutlet,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  transactionService: TransactionStore = inject(TransactionStore);
  transactions$: Observable<Transaction[]> = this.store.state$;
  userService: UserStore = inject(UserStore);
  user$: Observable<User> = this.userStore.state$;
  userProfile: User = { firstName: '', lastName: '', accounts: [], email: '' };
  DEPOSIT: string = 'Deposit';
  WITHDRAWAL: string = 'Withdrawal';
  transactionList: Transaction[] = [];
  balance: number = 0;
  income: number = 0;
  expense: number = 0;
  saving: number = 0;

  constructor(private userStore: UserStore, private store: TransactionStore) {}

  async ngOnInit() {
    try {
      this.userStore.getProfile();
      this.user$.subscribe((user) => {
        this.userProfile = user;
      });
      this.store.getAllTransactions();
      this.transactions$.subscribe((transactions) => {
        this.transactionList = this.sortTransactionsByDate(transactions);
        const income = this.getTotalIncome(this.transactionList);
        const expense = this.getTotalExpense(this.transactionList);
        this.balance = this.transactionList[0]?.balance;
        this.income = income;
        this.expense = expense;
      });
    } catch (error: unknown) {
      alert('Something went wrong!');
    } finally {
    }
  }

  sortTransactionsByDate(list: Transaction[]): Transaction[] {
    return list.sort((a: Transaction, b: Transaction): number => {
      return b.date - a.date;
    });
  }

  getTotalIncome(list: Transaction[]): number {
    const incomeTransactions = list.filter(
      (item) => item.type !== this.WITHDRAWAL
    );
    return incomeTransactions.reduce((x, { amount }): number => {
      return x + amount;
    }, 0);
  }

  getTotalExpense(list: Transaction[]): number {
    const expenseTransactions = list.filter(
      (item) => item.type !== this.DEPOSIT
    );
    return expenseTransactions.reduce((x, { amount }): number => {
      return x + amount;
    }, 0);
  }
}
