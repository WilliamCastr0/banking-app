import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { UserStore } from '../../user/user.store';
import User from '../../types/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  userService: UserStore = inject(UserStore);
  user$: Observable<User> = this.userStore.state$;
  userProfile: User = { firstName: '', lastName: '', accounts: [], email: '' };
  userName: string = '';

  constructor(private userStore: UserStore) {}

  ngOnInit() {
    this.userStore.getProfile();
    this.user$.subscribe((user) => {
      this.userProfile = user;
      this.userName = this.userProfile.firstName.substring(0, 1);
    });
  }
}
