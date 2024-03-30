import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeIconComponent } from '../icons/home-icon/home-icon.component';
import { TransactionIconComponent } from '../icons/transaction-icon/transaction-icon.component';
import { AccountIconComponent } from '../icons/account-icon/account-icon.component';
import { SettingsIconComponent } from '../icons/settings-icon/settings-icon.component';
import { AuthnService } from '../../../auth/authn.service';
import { MENU_OPTIONS } from '../../../utils/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    HomeIconComponent,
    TransactionIconComponent,
    AccountIconComponent,
    SettingsIconComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menuOption: string = MENU_OPTIONS.DASHBOARD;
  constructor(private authnService: AuthnService) {}

  setMenuOption(option: string): string {
    return (this.menuOption = option);
  }

  logout() {
    this.authnService.logout();
  }
}
