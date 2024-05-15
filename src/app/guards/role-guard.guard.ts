import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StorageService } from 'app/_services/storage.service';
import { UserService } from 'app/_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(private storage: StorageService,private router:Router,private toast:ToastrService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    const role=this.storage.getRole()
    if(route.data['roles'] && route.data['roles'].includes(role)){
      return true;
    }else{
      this.toast.error("vous n'avez pas le role correct")
      this.router.navigate(['auth/sign-in'])
      return false;
    }
  }
  
}
