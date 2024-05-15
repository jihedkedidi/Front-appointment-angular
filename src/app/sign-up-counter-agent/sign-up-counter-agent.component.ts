import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CouterAgentService } from 'app/_services/couter-agent.service';
import { CounterAgent } from 'app/models/couterAgent.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up-counter-agent',
  templateUrl: './sign-up-counter-agent.component.html',
  styleUrls: ['./sign-up-counter-agent.component.css']
})
export class SignUpCounterAgentComponent {

  constructor(private counterAgentService: CouterAgentService,private formBuilder: FormBuilder) { }
    role:string="admin";
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage='';
    idProduct:number;
    userForm: FormGroup;
    unamePattern = "[a-zA-Z]$";
  
    ngOnInit() {
      this.userForm = this.formBuilder.group({
        firstName: ['', [Validators.required,Validators.minLength(3),Validators.pattern(this.unamePattern)]],
        lastName: ['', [Validators.required,Validators.minLength(5),Validators.pattern(this.unamePattern)]],
        phone: ['',   [
          Validators.required,
          Validators.pattern('[0-9]{8}$'),
         ]],
        email: ['',[ Validators.email,Validators.required]],
        password: ['',    [
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
         ],
        ],
        role:['',[Validators.required]],
        location:['',[Validators.required]],
        product:['',[Validators.required]]
      })
    }
    onSubmit() {
      if (this.checkAllInputsNotEmpty(this.userForm)) {
        const newCouterAgent:CounterAgent ={
          user: {
            id: null,
            firstName: this.userForm.value.firstName,
            lastName: this.userForm.value.lastName,
            phone: this.userForm.value.phone,
            email: this.userForm.value.email,
            password: this.userForm.value.password,
          },
          id: null,
          product: {id:this.getProductId(),
          name:''},
          location: this.userForm.value.location
        }
        this.counterAgentService.createCounterAgent(newCouterAgent).subscribe();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Votre inscription a été bien enregistrer',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vous devez remplir tous les champs de formulaire',
        });

      } 
    }
    getProductId(){
      if(this.userForm.get('product').value=='CarteAgilis'){
        return this.idProduct=1
      }
      if(this.userForm.get('product').value=='CarteBon'){
        return this.idProduct=2
      }
      if(this.userForm.get('product').value=='BonValeur'){
        return this.idProduct=3
      }
      return null;
    }
    
    checkAllInputsNotEmpty(formGroup: FormGroup): boolean {
      for (const controlName in formGroup.controls) {
        if (formGroup.controls.hasOwnProperty(controlName)) {
          const control = formGroup.controls[controlName];
          if (control.value === null || control.value === '') {
            return false; // Return false if any input is empty
          }
        }
      }
      return true; // Return true if all inputs are not empty
    }

}
