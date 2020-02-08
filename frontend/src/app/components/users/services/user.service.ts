import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  constructor(
    private http: HttpClient;
  ) {
    this.url = 'http://localhost:3000/api';
  }

  listAllUsers() {
    return this.http.get(this.url);
  }
}
