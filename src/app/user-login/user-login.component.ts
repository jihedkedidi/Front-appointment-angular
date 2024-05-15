import { Component,OnInit } from '@angular/core';
import { LoginResponse } from '../models/loginResponse.model';
import { User } from '../models/user.model';
import { StorageService } from '../_services/storage.service';
import { UserTestService } from '../_services/user-test.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  isUser = false;
  isModerator = false;
  isAdmin = false;
  user: any;
  currentUser: User;
  users:any=[];
  firstName:any;
  roles:any=[];
  filteredUsers: User[];
  searchQuery: string = '';
  test:string='test';
  user2$:Observable<any>;
  constructor(private storageService: StorageService,private usertestservice:UserTestService,private toast:ToastrService) { }


  ngOnInit(): void {
    //this.role = this.storageService.getRole();
    //console.log(this.role);
    this.isUser = this.roles.includes('ROLE_USER');
    this.isModerator = this.roles.includes('ROLE_MODERATOR');
    this.isAdmin = this.roles.includes('ROLE_ADMIN');
    this.user=this.storageService.getUser();
    //console.log("user:",this.user);
    this.firstName=this.storageService.getFirstName();
    /* this.usertestservice.getUsers().subscribe(res=>{
      this.users=res;
    }) */this.getUsers();
    this.user2$=this.usertestservice.getUsers();
  }
  showProfile() {
    const user = this.storageService.getUser();
    if (user) {
      alert(`Name: ${user.roles}\nEmail: ${user.email}\nRole: ${user.phone}`);
    } else {
      alert('No user data found.');
    }
  }
  logout() {
    this.storageService.signOut();
    this.toast.error("Vous étes deconnecter")
  }
  getUser(id: number) {
    this.usertestservice.getUserById(id).subscribe(data => {
      this.user = data;
    });

  }

  getUsers(): void {
    this.usertestservice.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
      console.log("Users from api",users);
    });
  }
  

  searchUsers(): void {
    this.filteredUsers = this.users.filter(user => {
      return user.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  deleteUser(user: User): void {
    this.usertestservice.deleteUser(user.id).subscribe(() => {
      this.users = this.users.filter(u => u !== user);
      this.filteredUsers = this.filteredUsers.filter(u => u !== user);
    });
  }
  
}
