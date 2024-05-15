import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const API_URL = 'http://localhost:8080/api/test/';
const apiuser ='http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root',
})
export class UserTestService {
  constructor(private http: HttpClient) {}
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getUsers(){
    return this.http.get<User[]>(apiuser+'allUsers')
  }
  getUserById(id: number) {
    return this.http.get(`${apiuser}/user/${id}`);
  }
  getCurrentUser(): Observable<any> {
    return this.http.get(apiuser+'currentUser');
  }
  updateUser(user: User): Observable<any> {
    return this.http.put(`${apiuser}${user.id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${apiuser}${id}`;
    return this.http.delete(url);
  }
}

