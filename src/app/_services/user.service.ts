  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { catchError, map, Observable, observeOn, tap, throwError } from 'rxjs';
  import { User } from '../models/user.model';
  import { UserSignin } from '../models/userSignin.model';
  import { LoginResponse } from '../models/loginResponse.model';
import { Router } from '@angular/router';

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private apiUrl = 'http://localhost:8080/api/auth/signup';
    private apiSign ='http://localhost:8080/api/auth/signin';
    constructor(private http: HttpClient,private router:Router) { }
    
    createUser(user: User): Observable<User> {
      //let body = JSON.stringify(user);
      console.log('user',user);
      return this.http.post<User>(this.apiUrl,user,httpOptions) .pipe(
        catchError((error: any) => {
          console.error(error);
          return throwError('An error occurred');
        })
      ); 
    }
    signUser(user: UserSignin): Observable<LoginResponse> {
      return this.http.post<LoginResponse>(this.apiSign,user,httpOptions).pipe(
        catchError((error: any) => {
          console.error(error);
          return throwError('An error occurred');
        })
      ); 
    }
    

    isLoggedIn():boolean{
      return !!localStorage.getItem('token');
    }

  }
