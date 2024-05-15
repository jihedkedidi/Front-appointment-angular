import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, delay, finalize, throwError } from 'rxjs';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
const TOKEN_HEADER_KEY = 'Authorization'; 
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private token: StorageService,private router:Router,private toast:ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.token.getToken();
    if (token != null) {
      // Clone the request and add the Authorization header with the JWT token
      req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    /*  req=req.clone({
      setHeaders:{Authorization:'bearer ${token}'}//string concatination
     }) */
    
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Token is expired or invalid, redirect to login page
          this.toast.warning("Email ou mot de passe est incorrect")
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
    }  else {
    return next.handle(req);
    } 
  }
}



