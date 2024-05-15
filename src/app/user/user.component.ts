import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from 'app/_services/appointment.service';
import { StorageService } from 'app/_services/storage.service';
import { appointment } from 'app/models/appointment.model';
import { CureentUser } from 'app/models/currentUser.model';
import { product } from 'app/models/product.model';
import { User } from 'app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  role:string="user";
  hours: string[] = [];
  minutes: string[] = ['00', '10',  '20',  '30',  '40', '50'];
  myForm:any
  idUser:number;
  //currentUser:User;
  idProduct:number;
  showSubmitMessage = false;
  isSubmitted = false;
  showCancelMessage = false;
  minuteStep = 5;
  today: string = new Date().toISOString().split('T')[0];
  dropDownSelected=false;
  date:any;
  location:any;
  productId:any;
  appointmentWithDateLocProd:appointment[]=[];
  selectedHours: string[] = [];
  selectedMinutes:string[]=[];
      constructor(private formBuilder: FormBuilder,private storageService:StorageService,private appointmentService:AppointmentService) {
      this.myForm = this.formBuilder.group({
        date: ['', Validators.required],
        time: ['', Validators.required],
        hour: [{value:'',disabled:true}, Validators.required],
        minute:[{value:'',disabled:true}, Validators.required],
        location: ['', Validators.required] ,
        product: ['', Validators.required]
  }); 
      }
      ngOnInit():void  {  
        for(let i=8; i<15; i++) {
          this.hours.push(i.toString().padStart(2, '0'));
        }
        
        
      }
      submitForm(form: FormGroup) {
        const currentUser: User = {
          id: this.idUser = +this.storageService.getId(),
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          phone: ''
        };
        const currentProduct:product ={
          id: this.getProductId(),
          name: ''
        }   
        const newAppointment:appointment={
          id: null,
          date: this.myForm.get('date').value,
          heure: this.myForm.get('hour').value,
          minutes: this.myForm.get('minute').value,
          location: this.myForm.get('location').value,
          user: currentUser,
          product: currentProduct,
          status: null
        }
        /* id: null,
          date: this.myForm.get('date').value,
          heure: this.myForm.get('hour').value,
          minutes: this.myForm.get('minute').value,
          location: this.myForm.get('location').value,
          idProduct:this.idProduct=this.getProductId(),
          idUser:this.idUser=+this.storageService.getId() */
        this.showSubmitMessage = true;
        this.isSubmitted = true;
        //console.log(newAppointment);
        //console.log('CureentUser:',this.storageService.getUser());
        
        this.appointmentService.createAppointment(newAppointment).subscribe({
          next: data => {
            console.log(data);
          },
          error: err => {
            console.log("error");
            console.log(newAppointment.user.id);  
          }
        });
        /* const hour = this.myForm.get('hour').value;
        const minute = this.myForm.get('minute').value;
        const time = `${hour}:${minute}`; 
        const product=this.myForm.get('product').value;
        console.log(product);*/
        
        
        /* this.myForm.patchValue({time: time});
        console.log('Time selected: ' + time); */
        //console.log('newAppointment',newAppointment);
      }
    
      onCancel() {
        this.showCancelMessage=true;
        this.myForm.reset();
      }
      getProductId(){
        if(this.myForm.get('product').value=='carteAgilis'){
          return this.idProduct=1
        }
        if(this.myForm.get('product').value=='carteBon'){
          return this.idProduct=2
        }
        if(this.myForm.get('product').value=='bonValeur'){
          return this.idProduct=3
        }
        return null;
      }
      
      getMinDate(): string {
        const today: Date = new Date();
        const minDate: Date = new Date(today.getFullYear(), today.getMonth() , today.getUTCDate() + 1,today.getHours(),today.getMinutes());
        return  minDate.toISOString().split('T')[0];
      }

      getMaxDate(): string {
        const today: Date = new Date();
        const maxDate: Date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4);
        return maxDate.toISOString().split('T')[0];
      }
      getAppointmentDate(){
        this.date= this.myForm.get('date').value;
        this.appointmentService.getAppointmentsWithMatchingDateLocProd(this.date)
        .subscribe( (res)=>{this.appointmentWithDateLocProd=res;console.log(res);
        });
        console.log( this.myForm.get('date').value);
      }
      getAppointmentLocation(){
        this.location=this.myForm.get('location').value;
        
        console.log( this.myForm.get('location').value);
      }
      getAppointmentProductId(){
        if(this.myForm.get('product').value=='CarteAgilis'){
          return this.productId=1
        }
        if(this.myForm.get('product').value=='CarteBon'){
          return this.productId=2
        }
        if(this.myForm.get('product').value=='BonValeur'){
          return this.productId=3
        }
        return null;
      }

      isDropDownSelected():boolean{
        if (this.myForm.get('product').value !=="" && this.myForm.get('location').value !=="") {
          this.myForm.get('hour')?.enable();
          this.myForm.get('minute')?.enable();
          return true;
        }else {
          return false;
        }
      }
      
      showOnlyNotSelectedAppointments(){
        if (this.appointmentWithDateLocProd !== null) {
          let i=0;
          for (let j = 0; j < this.appointmentWithDateLocProd.length; j++) {
            if (this.hours[i]===this.appointmentWithDateLocProd[i].heure) {
              this.selectedHours.push(this.hours[i]);
            }
            if (this.minutes[j]===this.appointmentWithDateLocProd[i].minutes) {
              this.selectedMinutes.push(this.minutes[j]);
            }i++;
          }
        } 

        this.appointmentWithDateLocProd
      }
      isMinuteDisabled(minute: string): boolean {
      
        
        for (let i = 0; i < this.appointmentWithDateLocProd.length; i++) {
          if ((this.myForm.get('location').value===this.appointmentWithDateLocProd[i].location) && (this.myForm.get('product').value===this.appointmentWithDateLocProd[i].product.name )) {
            if (this.appointmentWithDateLocProd.some(appointment =>  appointment.minutes  === minute && this.myForm.get('hour').value ===appointment.heure))
          {
            return true
          } else {
            return false
          }
          }
        }  
        return false  
        
      }
      getHeure(){
        return this.myForm.get('hour').value;
      }
      
                
} 



