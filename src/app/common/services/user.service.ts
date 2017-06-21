import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { UserModel } from '../models/user.model';
import { HttpService } from './http.service';

@Injectable()
export class UserService {

  public userEvents = new BehaviorSubject<UserModel>(undefined);

  constructor(private http: HttpService) {
    this.retrieveUser();
  }

  getUsers(): Observable<Array<UserModel>> {
    return this.http.get(`users`);
  }

  getUser(id: string): Observable<UserModel> {
    return this.http.get(`users/${id}`);
  }

  register(name, email, password, birthYear): Observable<UserModel> {
    const body = { name, email, password, birthYear };
    return this.http.post(`users`, body);
  }

  authenticate(username, password): Observable<UserModel> {
    const body = { username, password };
    return this.http
      .post(`auth/login`, body)      
      .do(user => this.storeLoggedInUser(user));
  }

  storeLoggedInUser(user) {
    window.localStorage.setItem('rememberMe', JSON.stringify(user));
    this.userEvents.next(user);
  }

  retrieveUser() {
    const value = window.localStorage.getItem('rememberMe');
    if (value) {
      const user = JSON.parse(value);
      this.userEvents.next(user);
    }
  }

  logout() {
    this.userEvents.next(null);
    window.localStorage.removeItem('rememberMe');
  }

  updateUser(id,name,birthYear, mobileNumber) {
   const body = { name, birthYear, mobileNumber };
    return this.http.put(`users/${id}`, body);
  }
}
