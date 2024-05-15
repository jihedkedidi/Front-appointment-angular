import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CounterAgent } from 'app/models/couterAgent.model';
import { Observable, catchError, throwError } from 'rxjs';

const  API_URL = 'http://localhost:8080/api/counterAgents/';
const  API_AUTH = 'http://localhost:8080/api/auth/signup/';

@Injectable({
  providedIn: 'root'
})

export class CouterAgentService {


  constructor( private http:HttpClient) { }

  createCounterAgent(user: CounterAgent): Observable<CounterAgent> {
    return this.http.post<CounterAgent>(API_AUTH + 'counterAgent',user) .pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError('An error occurred');
      })
    ); 
  }
  

}
