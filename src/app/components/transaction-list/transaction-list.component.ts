import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { TransactionCardComponent } from '../shared/transaction-card/transaction-card.component';
import { TransactionStore } from '../../transaction.store';
import { Transaction } from '../../types/transaction';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, TransactionCardComponent],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css',
})
export class TransactionListComponent {
  transactionList: Transaction[] = [];
  transactionService: TransactionStore = inject(TransactionStore);
  transactions$: Observable<Transaction[]> = this.store.state$;

  constructor(private store: TransactionStore, private toastr: ToastrService) {}

  async ngOnInit() {
    // this.pageTitle = this.title.getTitle();
    try {
      this.store.getAllTransactions();
    } catch (error: unknown) {
      this.toastr.error('Intente más tarde.', 'El servidor no está disponible');
    } finally {
    }
  }
}
