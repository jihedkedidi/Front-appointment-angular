import { Component, ViewChild } from '@angular/core';
import { UserTestService } from '../_services/user-test.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user.model';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  role:string="admin";
  users: User[] = [];
  currentUser: User;
  content: any;
  modal: NgbModalRef;
  use:any;
  filteredUsers: any;
  constructor(
    private userTestService:UserTestService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userTestService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  editRow(content, user) {
    this.currentUser = user;
    this.modal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.modal.result.then(
      (result) => {
        this.updateUser();
      },
      (reason) => {}
    );
  }

  updateUser(): void {
    this.userTestService.updateUser(this.currentUser).subscribe(
      () => {
        const index = this.users.findIndex(u => u.id === this.currentUser.id);
        if (index >= 0) {
          this.users[index] = this.currentUser;
        }
      },
      (error) => {
        this.toastr.error('Error updating user');
      }
    );
  }

  saveChanges() {
    this.updateUser();
    this.modal.close();
  }

  deleteRow(user) {
    {
      this.userTestService.deleteUser(user.id).subscribe(() => {
        this.users = this.users.filter(u => u !== user);
        this.filteredUsers = this.filteredUsers.filter(u => u !== user);
      });
    
    }
  
  
  }
  deleteConfirmationNot(user){
    Swal.fire({
      title: 'Es-tu sûr?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le !'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimé !',
          'Ce utilisateur a éte supprimé',
          'success'
        );
        this.deleteRow(user); 
      }
    })
  }
  
}
