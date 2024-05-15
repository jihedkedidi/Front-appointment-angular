import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { UserTestService } from '../_services/user-test.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent {

  content: string;

  constructor(private userTestService: UserTestService,private storageService: StorageService) { }

  ngOnInit(): void {
    let token=this.storageService.getToken();
    this.userTestService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
