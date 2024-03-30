import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthnService } from '../../../auth/authn.service';
import { UserStore } from '../../../user/user.store';
import User from '../../../types/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  userService: UserStore = inject(UserStore);
  user$: Observable<User> = this.userStore.state$;
  userName: string = '';

  constructor(
    private userStore: UserStore,
    private authnService: AuthnService
  ) {}

  ngOnInit() {
    this.userStore.getProfile();
    this.user$.subscribe((user) => {
      const { firstName } = user;
      this.userName = firstName.substring(0, 1);
    });
  }

  logout() {
    this.authnService.logout();
  }
}
