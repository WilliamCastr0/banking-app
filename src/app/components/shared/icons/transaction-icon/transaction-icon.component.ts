import { Component, Input } from '@angular/core';

@Component({
  selector: 'transaction-icon',
  standalone: true,
  imports: [],
  templateUrl: './transaction-icon.component.html',
  styleUrl: './transaction-icon.component.css',
})
export class TransactionIconComponent {
  @Input() isActive: boolean = false;
}
