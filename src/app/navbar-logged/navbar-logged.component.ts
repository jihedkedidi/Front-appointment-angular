import { Component } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserTestService } from '../_services/user-test.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar-logged',
  templateUrl: './navbar-logged.component.html',
  styleUrls: ['./navbar-logged.component.css']
})
export class NavbarLoggedComponent {
  constructor(private storageService: StorageService,private usertestservice:UserTestService,private toast:ToastrService) { }
  firstName:string;
  isAdmin:boolean=false
  isUser:boolean=false
  isCounterAgent:boolean=false
  role:string;

  ngOnInit(){
    this.firstName=this.storageService.getFirstName();
    this.role=this.getRole()
    if (this.role==="ROLE_ADMIN") {
      this.isAdmin=true;
    }
    if (this.role==="ROLE_USER") {
      this.isUser=true;
    }
    if (this.role==="ROLE_MODERATOR") {
      this.isCounterAgent=true;
    }
  }

  logout() {
    this.storageService.signOut();
    this.toast.error("Vous étes deconnecter")
  }
  getRole(){
    return this.storageService.getRole();
  }
  

}
