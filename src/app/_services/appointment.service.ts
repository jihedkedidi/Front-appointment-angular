import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentStatus, appointment } from 'app/models/appointment.model';
import { Observable, catchError, map, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const API_APPOINTMENT ='http://localhost:8080/api/appointment/';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }
  createAppointment(appointment: appointment): Observable<appointment> {
    //let body = JSON.stringify(user);
    //console.log('user',user);
    return this.http.post<appointment>(API_APPOINTMENT+'create',appointment,httpOptions) .pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError('An error occurred');
      })
    ); 
  }
  getAppointments() {
    return this.http.get<appointment[]>(API_APPOINTMENT);
  }  
  getAppointmentsForThisMonth(): Observable<appointment[]> {
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    return this.http.get<appointment[]>(API_APPOINTMENT)
      .pipe(
        map((appointments) => {
          return appointments.filter((appointment) => {
            const appointmentDate = new Date(appointment.date);
            return appointmentDate >= startOfMonth && appointmentDate <= endOfMonth;
          });
        })
      );
  }

  getAppointmentsWithMatchingCounterAgent(id :number){
    return this.http.get<appointment[]>(`${API_APPOINTMENT}getAppointmentsWithMatchingCounterAgent/${id}`);
  }

  getAppointmentsWithMatchingDateLocProd(date:Date){
    return this.http.get<appointment[]>(`${API_APPOINTMENT}getAppointmentsWithMatchingDateLocProd/${date}`);
  }

  updateAppointment(appointment: appointment): Observable<appointment> {
    return this.http.put<appointment>(`${API_APPOINTMENT}${appointment.id}`, appointment);
  }
  updateAppointmentStatus(id: number, status: string): Observable<appointment> {
    return this.http.put<appointment>(`${API_APPOINTMENT}update/status/${id}`, status);
  }
  getAppointmentsWithMatchingUser(id:number){
    return this.http.get<appointment[]>(`${API_APPOINTMENT}getAppointmentsWithMatchingUser/${id}`)
  }
  deleteappointment(id:number):Observable<any>{
    return this.http.delete<appointment>(`${API_APPOINTMENT}${id}`)
  }
}
