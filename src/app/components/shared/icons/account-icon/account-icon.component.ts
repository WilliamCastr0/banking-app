import { Component, Input } from '@angular/core';

@Component({
  selector: 'account-icon',
  standalone: true,
  imports: [],
  templateUrl: './account-icon.component.html',
  styleUrl: './account-icon.component.css',
})
export class AccountIconComponent {
  @Input() isActive: boolean = false;
}
