import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class UserService<T> {
  constructor(private http: HttpClient) {}

  getProfile(endpoint: string): Observable<T> {
    return this.http.get<T>(endpoint);
  }
}
