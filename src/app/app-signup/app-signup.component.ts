import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../models/user.model';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-app-signup',
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.css']
})
export class AppSignupComponent {
    
    constructor(private userService: UserService,private formBuilder: FormBuilder) { }
    user: User = {
      id:null,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage='';
    
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
        ]
      })
    }
    onSubmit() {

      
      if(this.checkAllInputsNotEmpty(this.userForm) ){
        const newUser: User = {
          id:null,
          firstName: this.userForm.value.firstName,
          lastName: this.userForm.value.lastName,
          phone: this.userForm.value.phone,
          email: this.userForm.value.email,
          password: this.userForm.value.password,
        };
        this.userService.createUser(newUser).subscribe({
          next: data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
          },
          error: err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          }
        });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Votre inscription a été bien enregistrer',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(newUser);
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vous devez remplir tous les champs de formulaire',
        });
      }      
      
         //if (this.userForm.valid) {
          /* if(this.checkAllInputsEmpty()===false){
            const newUser: User = {
              id:null,
              firstName: this.userForm.value.firstName,
              lastName: this.userForm.value.lastName,
              phone: this.userForm.value.phone,
              email: this.userForm.value.email,
              password: this.userForm.value.password,
            };
            this.userService.createUser(newUser).subscribe({
              next: data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
              },
              error: err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
              }
            });
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            console.log(newUser);
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Vous devez remplir tous les champs de formulaire',
            });
          }       */
        // }else{
        //   Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'Vous devez remplir tous les champs de formulairrrre',
        //   });
        // } 
    }
    
    checkAllInputsEmpty(): boolean {
      const formControls = this.userForm.controls;
      for (const controlName in formControls) {
        if (formControls.hasOwnProperty(controlName) && formControls[controlName].value !== '') {
          return false; // Return false if any input has a value
        }
      }
      return true; // Return true if all inputs are empty
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



