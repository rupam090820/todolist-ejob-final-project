import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
   
  //User signUp : 
   signUp(userdata:any){

    return this.http.post('https://rest-food-api.glitch.me/api/user/signup',userdata);
   }

   //user Login :
   login(logIndata:any){
    return this.http.post('https://rest-food-api.glitch.me/api/user/login',logIndata);
   }
}
