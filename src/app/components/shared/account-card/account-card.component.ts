import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.css',
})
export class AccountCardComponent {
  @Input() iconBackground: string = 'red';
  @Input() iconUrl: string = '';
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() isForTransaction: boolean = false;
  @Input() description: string = '';
  @Input() withValue: boolean = false;
}
