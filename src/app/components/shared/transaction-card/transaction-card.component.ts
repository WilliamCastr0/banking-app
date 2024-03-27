import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.css',
})
export class TransactionCardComponent {
  @Input() urlArrowTransaction: string = 'assets/icons/arrow-up.svg';
  @Input() titleTransaction: string = '';
  @Input() dateTransaction: string = '';
  @Input() valueTransaction: string = '';
  @Input() category: string = '';
  @Input() urlDetails: string = '';

  srcArrowTransaction: string = '';

  ngOnInit() {
    this.srcArrowTransaction = this.urlArrowTransaction;
  }
}
