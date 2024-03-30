import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { hideAccountPipe } from '../../../pipes/hideAccount.pipe';

@Component({
  selector: 'app-money-card',
  standalone: true,
  imports: [hideAccountPipe, CommonModule],
  templateUrl: './money-card.component.html',
  styleUrl: './money-card.component.css',
})
export class MoneyCardComponent {
  @Input() urlChipMoneyCard: string = 'assets/icons/chip-card-white.svg';
  @Input() urlMastercard: string = 'assets/icons/mastercard-white.svg';
  @Input() balance: number = 0;
  @Input() firstName: string = '';
  @Input() account: string = '';
  srcChipMoneyCard: string = '';
  srcMastercard: string = '';

  constructor() {}

  ngOnInit() {
    this.srcChipMoneyCard = this.urlChipMoneyCard;
    this.srcMastercard = this.urlMastercard;
  }
}
