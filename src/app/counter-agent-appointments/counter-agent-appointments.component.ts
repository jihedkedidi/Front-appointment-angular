import { Component, Input } from '@angular/core';
import { AppointmentService } from 'app/_services/appointment.service';
import { AppointmentStatus, appointment } from 'app/models/appointment.model';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-counter-agent-appointments',
  templateUrl: './counter-agent-appointments.component.html',
  styleUrls: ['./counter-agent-appointments.component.css']
})
export class CounterAgentAppointmentsComponent {
  role:string="counterAgent"
  appointments:appointment[]=[];
  currentStatus:string;
  currentAppointment:appointment;
  constructor(private appointmentService:AppointmentService,private toastr:ToastrService){}
  ngOnInit(){
    this.appointmentService.getAppointments().subscribe(response=>{
    this.appointments=response;
    
    console.log(response);
    
    });

  }
  getStatus(status:string){
    switch (status) {
      case "PENDING":
          return 'en cour';
      case "CONFIRMED":
          return 'confirmé';
      case "CANCELED":
          return 'annule';
      default:
          return '';
    }
  }
  getBackground(status:string){
    switch (status) {
      case "PENDING":
          return 'yellow';
      case "CONFIRMED":
          return 'green';
      case "CANCELED":
          return 'red';
      default:
          return '';
    }
  }
  getAppointmentStatus(appointment){
    switch (appointment.status) {
     case 'PENDING':
       return 'En Attente'
     break;
     case 'CANCELED':
       return 'Annulée'
     break;
     case 'CONFIRMED':
       return 'Confirmée'
     break;  
     default: return 'En Attente'
    }
   }
  updateAppointmentStatus(appointment: appointment, status: string): void {
    this.appointmentService.updateAppointmentStatus(appointment.id, status).subscribe(()=> {
      
      
    }, error => {
      console.error('Error while updating appointment status', error);
    });
  }
}

