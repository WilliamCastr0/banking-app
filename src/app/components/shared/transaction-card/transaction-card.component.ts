import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.css',
})
export class TransactionCardComponent {
  @Input() id: string = '';
  @Input() urlArrowTransaction: string = 'assets/icons/arrow-up.svg';
  @Input() titleTransaction: string = '';
  @Input() dateTransaction: number = 0;
  @Input() valueTransaction: number = 0;
  @Input() category: string = '';
  @Input() withHover: boolean = false;

  srcArrowTransaction: string = '';

  ngOnInit() {
    this.srcArrowTransaction = this.urlArrowTransaction;
  }
}
