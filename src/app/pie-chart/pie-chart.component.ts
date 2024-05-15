import { Component, ViewChild } from '@angular/core';
import { AppointmentService } from 'app/_services/appointment.service';
import { Chart  } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  
  public locationData: any;
  public chart: any;
  constructor(private appointmentService:AppointmentService){}
  ngOnInit(){
    
  this.appointmentService.getAppointments().subscribe((data: any[]) => {
    // Filter appointments by location
    const gabesAppointments = data.filter(appointment => appointment.location === 'gabes');
    const sfaxAppointments = data.filter(appointment => appointment.location === 'sousse');
    const tunisAppointments = data.filter(appointment => appointment.location === 'tunis');

    // Create data array for chart
    const locationData = [
      gabesAppointments.length,
      sfaxAppointments.length,
      tunisAppointments.length
    ];
    console.log(gabesAppointments);
    console.log(data);
    
    // Create chart
    // Create chart
    this.chart = new Chart('locationChart', {
      type: 'pie',
      data: {
        labels: ['Gabes', 'Sousse', 'Tunis'],
        datasets: [{
          data: locationData,
          backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
          hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384']
          
        }]
      },
      options:{ 
        plugins:{
          title: {
            display: true,
            text: 'Rendez-vous par lieu',
            font:{
              size:30
            }
            
        }
        }
      }
      
      
    });
  });
  }
}

  // // Pie
  // public pieChartOptions: ChartOptions<'pie'> = {
  //   responsive: false,
  // };
  // public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  // public pieChartDatasets = [ {
  //   data: [ 300, 500, 100 ]
  // } ];
  // public pieChartLegend = true;
  // public pieChartPlugins = [];

  // constructor() {
  // }



