import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RandomUserListService {
  private baseUrl = 'https://randomuser.me/api/?results=5';

  constructor(private http: HttpClient) {}

  getUsersApi() {
    return this.http.get(`${this.baseUrl}`);
  }
}
