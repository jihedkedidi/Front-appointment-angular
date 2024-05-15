import { Component, Input ,OnInit} from '@angular/core';
import { UserTestService } from 'app/_services/user-test.service';
import { UserService } from 'app/_services/user.service';
import { User } from 'app/models/user.model';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
 
  //@Input() user:any;
  //user1:any;
  //@Input() test:any;
  users:any[];
  constructor(private userTestService:UserTestService){}
  ngOnInit(): void {
    this.userTestService.getUsers().subscribe((response)=>{this.users=response;console.log(response);
    } 
    );
    
  }
}
