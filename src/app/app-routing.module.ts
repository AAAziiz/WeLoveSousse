import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { QuestionComponent } from './question/question.component';


const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'question',component:QuestionComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
