import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HomeIconComponent } from '../icons/home-icon/home-icon.component';
import { TransactionIconComponent } from '../icons/transaction-icon/transaction-icon.component';
import { AccountIconComponent } from '../icons/account-icon/account-icon.component';
import { SettingsIconComponent } from '../icons/settings-icon/settings-icon.component';
import { AuthnService } from '../../../auth/authn.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HomeIconComponent,
    TransactionIconComponent,
    AccountIconComponent,
    SettingsIconComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  constructor(private authnService: AuthnService) {}

  logout() {
    this.authnService.logout();
  }
}
