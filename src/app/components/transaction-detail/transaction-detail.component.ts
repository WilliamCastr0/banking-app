import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';

import { TransactionStore } from '../../transaction.store';
import { Transaction } from '../../types/transaction';

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.css',
})
export class TransactionDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  transactionStore: TransactionStore = inject(TransactionStore);
  transaction$: Observable<Transaction | undefined> =
    new Observable<Transaction>();
  productId: string = '';

  async ngOnInit() {
    this.transaction$ = this.route.params.pipe(
      switchMap((params) => {
        return this.transactionStore.getTransactionById(params['id']);
      })
    );
  }
}
