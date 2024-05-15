import { Component } from '@angular/core';
import { UserSignin } from '../models/userSignin.model';
import { UserService } from '../_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private userService: UserService,private storageService:StorageService,private formBuilder: FormBuilder,private router: Router,private toast:ToastrService) { }
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage='';
    userFormSignin: FormGroup;
    ngOnInit() {
      this.userFormSignin = this.formBuilder.group({
        email: ['',[ Validators.email,Validators.required]],
        password: ['',    [
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
         ],
        ] 
      })
      
    }  
    login(): void {
      const { email, password } = this.userFormSignin.value;
      if (!email || !password) {
        this.toast.info("saisir email et mot de passe")
        return;
      }
      this.userService.signUser({ email, password }).subscribe(
        {
          next: data => {
            this.storageService.saveToken(data.token);
            this.storageService.saveUser(data);
            const role=this.storageService.getRole();
            console.log('role:',role);
            if(role==='ROLE_ADMIN'){
              console.log('Navigating to admin page...');
              this.router.navigate(['admin'])
            }if (role==='ROLE_USER') {
              this.router.navigate(['/user'])
            }
            if (role==='ROLE_MODERATOR') {
              this.router.navigate(['agentguichet'])
              console.log('Navigating to admin page...');
            }
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.toast.success('Connexion réussie')
          },
          error: err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
            //this.toast.error(this.errorMessage)
          }
        });
    }
}