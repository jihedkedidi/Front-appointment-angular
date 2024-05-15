import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { AppointmentService } from 'app/_services/appointment.service';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs';
import { StorageService } from 'app/_services/storage.service';

@Component({
  selector: 'app-counter-agent-test',
  templateUrl: './counter-agent-test.component.html',
  styleUrls: ['./counter-agent-test.component.css']
})
export class CounterAgentTestComponent {

  role:string="counterAgent";
  id:number;
  appointments: any[] = []; // array to store appointments
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    defaultTimedEventDuration:"00:10",
    headerToolbar: {
      start: 'prev,next today', // Display the calendar title in the header
      center: 'title',
      end: 'dayGridMonth,dayGridWeek,timeGridDay' // Add buttons to navigate to today, previous, and next dates, as well as the Month and Week views
    },
    plugins: [dayGridPlugin,timeGridPlugin],
    displayEventTime: false,
    events: [],
    weekends: false  ,
    slotMinTime:"08:00",
    slotMaxTime:"15:00",
    slotDuration:'00:10',
    locale:'fr'
  };
  constructor(private appointmentService:AppointmentService,private storageService:StorageService){};
  ngOnInit(): void {
      this.appointmentService.getAppointmentsWithMatchingCounterAgent(this.getId()).subscribe(appointments => {
        this.appointments = appointments;
        this.calendarOptions.events= this.appointments.map(appointment => { 
        const date = new Date(appointment.date[0],appointment.date[1] - 1,appointment.date[2],appointment.heure,appointment.minutes);
        const startTime = date.getHours();
        const endTime=date.toISOString().slice(0, -5);
        console.log("startTime",startTime);
        console.log(appointments);
        
        console.log('date',date);
        const end=date.getTime();
        
        const title = appointment.user.firstName+' '+appointment.user.lastName; 
        console.log(date);  
        console.log('strat',startTime);  
        console.log(end);   
        const colorP = () => {
          if (appointment.product==null) {
            return '#0000FF';
          }
          switch (appointment.product.name) { 
            case "carteAgilis": { 
              return '#0000FF';
              break;
            } 
            case "carteBon": { 
              return '#00FF00';
              break;
            } 
            case "bonValeur": { 
              return '#FF0000';
              break;

            } 
            default: {
              return '#FF0000'; // default color code for unknown cases
            }
          } 
        }
          return {
            title: title,
            date:date,
            start:date,
            color:colorP(),
          }
          
        });  
      });
     
       
    }
    getId(){
      return  this.id=+this.storageService.getId();
     }

}
