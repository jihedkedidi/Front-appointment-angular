import { Component } from '@angular/core';
import { AppointmentService } from 'app/_services/appointment.service';
import { appointment } from 'app/models/appointment.model';

@Component({
  selector: 'app-linechartstatus',
  templateUrl: './linechartstatus.component.html',
  styleUrls: ['./linechartstatus.component.css']
})
export class LinechartstatusComponent {


  appointmentsData:appointment[]=[];
  public lineChartData: Array<any> = [{ data: [], label: 'Appointments' }];
  public lineChartLabels: Array<any> = [{fill:true}];
  public lineChartOptions: any = {
    responsive: true,
  }
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private appointmentService:AppointmentService) { }
  ngOnInit(){
      this.generateLineChartStatus();
  }

  generateLineChartStatus() {
    const currentDate=new Date();
    const numDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const appointmentsCount = new Array(numDaysInMonth);
    for (let index = 0; index < appointmentsCount.length; index++) {
       appointmentsCount[index] = index+1;
    }
    console.log("a",appointmentsCount);
   
    this.lineChartData=[
      {data:appointmentsCount,label:'Rendez-Vous Par Jour'}
    ]
  }

}
