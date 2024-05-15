import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  allowNewServer=true;

  constructor(){
    
    setTimeout(()=>{this.allowNewServer=false},2000)
  }
  ngOnInit(){
    
  }
}
