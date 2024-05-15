import { Component,OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { AppointmentService } from 'app/_services/appointment.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'

@Component({
  selector: 'app-admin-calendar',
  templateUrl: './admin-calendar.component.html',
  styleUrls: ['./admin-calendar.component.css']
})
export class AdminCalendarComponent {
  role:string="admin";
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
  constructor(private appointmentService:AppointmentService){};
  ngOnInit(): void {
      this.appointmentService.getAppointments().subscribe(appointments => {
        this.appointments = appointments;
        this.calendarOptions.events= this.appointments.map(appointment => { 
        const date = new Date(appointment.date[0],appointment.date[1] - 1 ,appointment.date[2],appointment.heure,appointment.minutes);
        console.log(this.appointments);
        console.log(date);
        const title = appointment.user.firstName+' '+appointment.user.lastName;   
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


}
