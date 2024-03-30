import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ApiService<T> {
  constructor(private http: HttpClient) {}

  getAllTransactions(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(endpoint);
  }

  getTransactionById(endpoint: string, id: unknown): Observable<T> {
    return this.http.get<T>(`${endpoint}/${id}`);
  }

  createTransaction(endpoint: string, data: T): Observable<T> {
    return this.http.post<T>(endpoint, data);
  }
}
