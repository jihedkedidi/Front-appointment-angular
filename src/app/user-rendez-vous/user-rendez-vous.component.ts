import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentService } from 'app/_services/appointment.service';
import { StorageService } from 'app/_services/storage.service';
import { appointment } from 'app/models/appointment.model';

@Component({
  selector: 'app-user-rendez-vous',
  templateUrl: './user-rendez-vous.component.html',
  styleUrls: ['./user-rendez-vous.component.css']
})
export class UserRendezVousComponent {

  appointments:appointment[]=[];
  modal: NgbModalRef;
  role:string="user";
  currentAppointment:appointment;
  content: any;
  constructor(private appointmentService:AppointmentService,private storageService:StorageService,private modalService: NgbModal){}
  getId():string{
    return this.storageService.getId();
  }
  id:number=+this.getId();
  
  
  ngOnInit(){
    console.log(this.id);
    this.appointmentService.getAppointmentsWithMatchingUser(this.id).subscribe(
      (response)=>{
          this.appointments=response;
          console.log(response);
      }
    )
  }
  deleteAppointment(id){
    this.appointmentService.deleteappointment(id).subscribe();  
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
  disbleButton(status: string): boolean {
    switch (status) {
      case 'CANCELED':
      case 'CONFIRMED':
        return true;
      default:
        return false;
    }
  }
  updateAppointment(): void {
    this.appointmentService.updateAppointment(this.currentAppointment).subscribe(
    );
  }
  saveChanges() {
    this.updateAppointment();
    this.modal.close();
  }
  editRow(content, appointment) {
    this.currentAppointment = appointment;
    this.modal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.modal.result.then(
      (result) => {
        this.updateAppointment();
      },
      (reason) => {}
    );
  }
  
}
