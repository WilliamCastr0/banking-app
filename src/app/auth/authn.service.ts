import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

import Login from '../types/login';
import Signup from '../types/signup';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthnService {
  protected readonly backendUrl = environment.backendUrl;

  constructor(private http: HttpClient, private router: Router) {}

  async isLoggedIn() {
    const response: any = await lastValueFrom(
      this.http.get<string>(`${this.backendUrl}/check-signin`)
    );
    return response.loggedIn;
  }

  login(data: Login): Observable<string> {
    return this.http.post<string>(`${this.backendUrl}/signin`, data);
  }

  signup(data: Signup): Observable<string> {
    return this.http.post<string>(`${this.backendUrl}/signup`, data);
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    this.router.navigate(['login']);
  }
}
