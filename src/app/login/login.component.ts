import { Component } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  msg='';
  constructor(private _service:RegistrationServiceService, private _router :Router){}
  user=new User();


  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved"),
        alert("login successfull");
        this._router.navigate(['/loginsuccess'])
      }
      ,error =>{console.log("exception occured"),
      alert("login failed ! please check your email or password"),
      this.msg="Please check your information !!!"

  })

  }
}
