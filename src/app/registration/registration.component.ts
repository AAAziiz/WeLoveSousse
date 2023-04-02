import { Component } from '@angular/core';
import { User } from '../user';
import { RegistrationServiceService } from '../registration-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 user=new User();
 msg='';
 constructor(private _service:RegistrationServiceService, private _router :Router){}

 registerUser(){
  this._service.RegisterUserFromRemote(this.user).subscribe(
    data=>{
      console.log(this.user),
      this.msg="Registration successfully",
      this._router.navigate(['/login']),
      alert("User Registered successfully")
    },error=>{
      console.log("Registration failed"),
      this.msg=error.error;
      
    });
  }










}
