import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: UserService,private router:Router,private toast:ToastrService){}
  canActivate():boolean{
    if(this.auth.isLoggedIn()){
      return true;
    }else{
      this.toast.error("s'il vous plait Connectez-vous d'abord")
      this.router.navigate(['auth/sign-in'])
      return false;
    }
  }
  
}
