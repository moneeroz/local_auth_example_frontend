import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClinet: HttpClient) {}

  registerUser(formData: any) {
    return this.httpClinet.post<Iuser>(
      'http://localhost:3000/register',
      formData,
    );
  }
  loginUser(formData: any) {
    return this.httpClinet.post<Iuser>('http://localhost:3000/login', formData);
  }

  getUserData() {
    let data = localStorage.getItem('currentUser');

    return data ? JSON.parse(data) : null; // JSON.parse converts a string to an object
  }

  isAuthenticated() {
    return this.getUserData() !== null ? true : false;
  }
}
