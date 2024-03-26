import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [HeaderComponent],
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
