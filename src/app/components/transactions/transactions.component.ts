import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';

import { TransactionCardComponent } from '../shared/transaction-card/transaction-card.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [TransactionCardComponent, RouterLink, RouterOutlet],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  pageTitle: string = '';

  constructor(public title: Title) {}

  ngOnInit() {
    this.pageTitle = this.title.getTitle();
  }
}
