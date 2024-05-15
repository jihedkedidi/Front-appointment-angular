import { Injectable } from '@angular/core';
import { LoginResponse } from '../models/loginResponse.model';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private router:Router) {}
  
  public saveToken(tokenV: string) {
    //window.sessionStorage.removeItem(TOKEN_KEY);
    //window.sessionStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem('token',tokenV)
  }
  public getToken() { 
    //return sessionStorage.getItem('TOKEN_KEY');
    return localStorage.getItem('token');
  }
  
  public saveUser(user: any): void {
    console.log('Saving user:', user);
    //window.sessionStorage.removeItem(USER_KEY);
    //window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem(USER_KEY,JSON.stringify(user));

  }
  public getUser(): any {
    //const userString = sessionStorage.getItem(USER_KEY);
    const userString = localStorage.getItem(USER_KEY);
    if (userString) {
      return JSON.parse(userString) //as LoginResponse;
    }
    return null;
  }

  public signOut(){
    localStorage.removeItem('auth-user');
    localStorage.removeItem('token');
    this.router.navigate(['auth/sign-in'])
    //return this.http.post<any>(this.apiLogOut,{}, httpOptions)
  
    /* .pipe(  
      tap(() => this.router.navigate(['auth/sign-in']))
    ); */
  }
  getRole(): string {
    const token = this.getToken();
    console.log('token:', token);
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('payload:', payload);
      return payload.roles[0];
    }
    return null;
  }
  getFirstName(): string {
    const token = this.getToken();
    console.log('token:', token);
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('payload:', payload);
      return payload.firstName;
    }
    return null;
  }
  getId(): string {
    const token = this.getToken();
    console.log('token:', token);
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('payload:', payload);
      return payload.id;
    }
    return null;
  }
  

}