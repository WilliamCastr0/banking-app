import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { MoneyCardComponent } from '../shared/money-card/money-card.component';
import { TransactionStore } from '../../transaction.store';
import { Transaction } from '../../types/transaction';
import { UserStore } from '../../user/user.store';
import User from '../../types/user';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [MoneyCardComponent, CommonModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent {
  transactionService: TransactionStore = inject(TransactionStore);
  transactions$: Observable<Transaction[]> = this.store.state$;
  transactionList: Transaction[] = [];
  userService: UserStore = inject(UserStore);
  user$: Observable<User> = this.userStore.state$;
  userProfile: User = { firstName: '', lastName: '', accounts: [], email: '' };
  balance: number = 0;

  constructor(private userStore: UserStore, private store: TransactionStore) {}

  ngOnInit() {
    this.userStore.getProfile();
    this.user$.subscribe((user) => {
      this.userProfile = user;
    });
    this.store.getAllTransactions();
    this.transactions$.subscribe((transactions) => {
      this.transactionList = this.sortTransactionsByDate(transactions);
      this.balance = this.transactionList[0]?.balance;
    });
  }

  sortTransactionsByDate(list: Transaction[]): Transaction[] {
    return list.sort((a: Transaction, b: Transaction): number => {
      return b.date - a.date;
    });
  }
}
