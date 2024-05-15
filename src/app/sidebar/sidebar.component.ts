import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() role:string;
  isAdmin:boolean=false;
  isCounterAgent:boolean=false;
  isUser:boolean=false;
  ngOnInit(){
    if (this.role==="admin")
    {
      this.isAdmin=true
    }
    if (this.role==="user")
    {
      this.isUser=true
    }
    if (this.role==="counterAgent")
    {
      this.isCounterAgent=true
    }
  }
}
