import { Component } from '@angular/core';
import { AppointmentService } from 'app/_services/appointment.service';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'

@Component({
  selector: 'app-agent-guichet',
  templateUrl: './agent-guichet.component.html',
  styleUrls: ['./agent-guichet.component.css']
})
export class AgentGuichetComponent {
  role:string="counterAgent";

  appointments: any[] = []; // array to store appointments
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    defaultTimedEventDuration:"00:15",
    headerToolbar: {
      start: 'prev,next today', // Display the calendar title in the header
      center: 'title',
      end: 'dayGridMonth,dayGridWeek,timeGridDay' // Add buttons to navigate to today, previous, and next dates, as well as the Month and Week views
    },
    plugins: [dayGridPlugin,timeGridPlugin],
    displayEventTime: false,
    events: [],
    eventClick: this.handleEventClick.bind(this),
    weekends: false  ,
    slotDuration:'00:10',
    duration:'01:15',
    locale:'fr'
  };
  constructor(private appointmentService:AppointmentService){};
  ngOnInit(): void {
      this.appointmentService.getAppointments().subscribe(appointments => {
        this.appointments = appointments;
        this.calendarOptions.events= this.appointments.map(appointment => { 
        const date = new Date(appointment.date[0],appointment.date[1] - 1,appointment.date[2],appointment.heure,appointment.minutes);
        const startTime = date.getHours();
        const endTime=date.toISOString().slice(0, -5);
        console.log("startTime",startTime);
        
        console.log('date',date);
        const start=date.getHours();
        const end=date.getTime();
        
        const title = appointment.user.firstName+' '+appointment.user.lastName; 
        console.log(date);  
        console.log('strat',startTime);  
        console.log(end);   
        const colorP = () => {
          switch (appointment.product.name) { 
            case "carteAgilis": { 
              return '#0000FF'; //bleu
            } 
            case "carteBon": { 
              return '#00FF00'; //vert
            } 
            case "bonValeur": { 
              return '#FF0000'; //rouge
            } 
            default: {
              return '000000'; // default color code for unknown cases
            }
          } 
        }
          return {
            title: title,
            date:date,
            start:startTime,
            color:colorP(),
          }
          
        });  
      });
    }
    handleEventClick(info: any) {
      console.log('a',info.event.title);
      console.log(info.event.date);
      console.log(info.event.end);
      console.log(info.event.extendedProps); 
      // this will contain your appointment object
      // you can do whatever you want with the appointment object here
    }
    
    handleDateClick(arg) {
      alert('date click! ' + arg.dateStr)
    }
    
    

}
