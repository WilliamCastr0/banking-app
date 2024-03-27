import { Injectable } from '@angular/core';

import { Transaction } from './types/transaction';
import { environment } from '../environments/environment';
import Store from './store/Store';
import ApiService from './store/ApiService';

@Injectable({
  providedIn: 'root',
})
export class TransactionStore extends Store<Transaction[]> {
  protected readonly endpoint = environment.backendUrl + '/transactions';
  protected transactionList: Transaction[] = [];

  constructor(private apiService: ApiService<Transaction>) {
    super([]);
  }

  async getAllTransactions() {
    this.apiService
      .getAllTransactions(this.endpoint)
      .subscribe((transactions) => {
        this.setState(transactions);
      });
  }

  async getTransactionById(id: string) {
    const response = await fetch(
      environment.backendUrl + `/transactions/${id}`
    );
    return await response.json();
  }

  createTransaction(form: Transaction) {
    return this.apiService.createTransaction(this.endpoint, form);
  }
}
