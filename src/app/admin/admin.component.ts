import { Component } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserTestService } from '../_services/user-test.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private storageService: StorageService,private usertestservice:UserTestService,private toast:ToastrService) { }
  currentUser:User;
  idCurrentUser:number;
  firstName:string;
  role:string="admin";

  ngOnInit():void {
    //this.idCurrentUser =+this.storageService.getId();
    //console.log(this.idCurrentUser);
    /* this.usertestservice.getUserById(this.idCurrentUser).subscribe(
      (response: any)=>{
        this.currentUser = response;
        console.log("currentUser",this.currentUser);
        this.firstName=response.firstName;
      },
      (error: any) => {
        console.log(error);
      }
    );   */  
    this.firstName=this.storageService.getFirstName()
  }
      
    
    
   
    
  

  logout() {
    this.storageService.signOut();
    this.toast.error("Vous étes deconnecter")
  }
  
  

}
