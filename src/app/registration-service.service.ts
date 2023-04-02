import { Question } from './question';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private _http:HttpClient) { }


  public loginUserFromRemote(user:User):Observable<any>{

    return this._http.post<any>("http://localhost:8090/login",user)
    
  }

  public RegisterUserFromRemote(user:User):Observable<any>{

    return this._http.post<any>("http://localhost:8090/registeruser",user)
    
  }

  public Publishquestion(quest:Question){
    return this._http.post<any>("http://localhost:8090/registerquestion",quest)

  }
}
 

