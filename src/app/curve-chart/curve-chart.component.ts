import { Component } from '@angular/core';
import { AppointmentService } from 'app/_services/appointment.service';
import { appointment } from 'app/models/appointment.model';

@Component({
  selector: 'app-curve-chart',
  templateUrl: './curve-chart.component.html',
  styleUrls: ['./curve-chart.component.css']
})
export class CurveChartComponent {
  appointmentsData: appointment[] = [];

  // Chart.js variables
  public lineChartData: Array<any> = [{ data: [], label: 'Appointments' }];
  public lineChartLabels: Array<any> = [{fill:true}];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          maxTicksLimit: 31
        }
      }]
    }
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 99, 132, 0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private appointmentService:AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAppointmentsForThisMonth().subscribe((data) => {
      this.appointmentsData = data;
      this.generateCurveChart();
    });
  }
  generateCurveChart(): void {
    // Calculate the number of appointments for each day of the month
    const currentDate = new Date();
    const numDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    const appointmentsCount = new Array(numDaysInMonth).fill(0);
    console.log("AppointmentCount:",appointmentsCount);
    
    this.appointmentsData.forEach((appointment) => {
      const appointmentDate = new Date(appointment.date);
      if (appointmentDate.getMonth() === currentDate.getMonth()) {
        const dayOfMonth = appointmentDate.getDate() - 1;
        console.log("dayMonth",dayOfMonth);
        
        appointmentsCount[dayOfMonth]++;
        console.log(appointmentsCount);
        
      }
    });

    // Generate the curve chart using chart.js
    this.lineChartData = [
      { data: appointmentsCount, label: 'Rendez-vous par jour' }
    ];

    this.lineChartLabels = Array.from(Array(numDaysInMonth), (_, i) => (i + 1).toString());
  }

}
