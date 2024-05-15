import { Component,ViewChild } from '@angular/core';
import { AppointmentService } from 'app/_services/appointment.service';
import { appointment } from 'app/models/appointment.model';
import{
  
} from "ng2-charts";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {

  public appointments:appointment[]=[];
  public lineChartData:Array<any>=[{data:[],label:"Appointments"}];
  public lineChartDataLabels:Array<any>=[{fill:true}];
  public lineChartOptions:any={
    responsive:false,
  }

  
  public lineChartLengend=true;
  public lineChartType='line';
  constructor(private appointmentService:AppointmentService){}
  ngOnInit(){

    this.appointmentService.getAppointmentsForThisMonth().subscribe((response)=> {
      this.appointments=response;
      console.log(response);
      this.generateLineChart();
    });
    console.log("appointments",this.appointments);
    
    this.generateLineChart();
  }

  getDaysInMonth(year,month){
   return new Date(year,month).getDate();
  }
  generateLineChart(){
    const date=new Date();
    const numberOfDays=new Date(date.getFullYear(),date.getMonth()+1,0).getDate() ;
    const tabNumberDays=new Array(numberOfDays).fill(0);
    this.appointments.forEach(appointment => {
      tabNumberDays[appointment.date[2]-1]+=1; 
      
    });console.log(tabNumberDays);
    const yValues=new Array().fill(0);
    yValues[0]=0;
    const xValues=new Array().fill(0);
    console.log(yValues.length);
    let j=0;
    for (let i = 0; i < tabNumberDays.length; i++) {
      if(tabNumberDays[i]!=0){
        yValues[j]=tabNumberDays[i];
        xValues[j]=i+1;
        console.log(xValues);
        j++;
      }
          
    }


    this.lineChartData=[
      {data:yValues,label:'Rendez-vous par our'}
    ]
    this.lineChartDataLabels=xValues;
      
  }  
}    
