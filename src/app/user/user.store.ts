import { Injectable } from '@angular/core';

import User from '../types/user';
import { environment } from '../../environments/environment';
import Store from '../store/Store';
import UserService from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserStore extends Store<User> {
  protected readonly endpoint = environment.backendUrl + '/users/profile';

  constructor(private userApiService: UserService<User>) {
    super({
      firstName: '',
      lastName: '',
      accounts: [],
      email: '',
    });
  }

  async getProfile() {
    this.userApiService.getProfile(this.endpoint).subscribe((user) => {
      this.setState(user);
    });
  }
}
