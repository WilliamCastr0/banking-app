import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-money-card',
  standalone: true,
  imports: [],
  templateUrl: './money-card.component.html',
  styleUrl: './money-card.component.css',
})
export class MoneyCardComponent {
  @Input() urlChipMoneyCard: string = 'assets/icons/chip-card-white.svg';
  @Input() urlMastercard: string = 'assets/icons/mastercard-white.svg';
  srcChipMoneyCard: string = '';
  srcMastercard: string = '';

  constructor() {}

  ngOnInit() {
    this.srcChipMoneyCard = this.urlChipMoneyCard;
    this.srcMastercard = this.urlMastercard;
  }
}
