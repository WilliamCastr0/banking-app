import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

import { TransactionCardComponent } from '../shared/transaction-card/transaction-card.component';
import { TransactionStore } from '../../transaction.store';
import { Transaction } from '../../types/transaction';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [TransactionCardComponent, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  // pageTitle: string = '';
  transactionList: Transaction[] = [];
  transactionService: TransactionStore = inject(TransactionStore);
  transactions$: Observable<Transaction[]> = this.store.state$;

  constructor(public title: Title, private store: TransactionStore) {}

  async ngOnInit() {
    // this.pageTitle = this.title.getTitle();
    try {
      this.store.getAllTransactions();
    } catch (error: unknown) {
      alert('Something went wrong!');
    } finally {
    }
  }
}
