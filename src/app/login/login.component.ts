import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { signin } from './user/login';
import { SignUp } from './user/signup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public newUser:any=[];
  public logUser:any=[];
constructor( private uService:LoginService ,private route:Router){
  this.newUser=new SignUp('','','');
  this.logUser=new signin('','');
}
// User signUp:
SignUp(){
console.log(this.newUser);
let userdata=this.newUser;
this.uService.signUp(userdata).subscribe((res:any)=>{
  console.log(res);
  // alert(res.message)
  alert('SignUp Successfully');
  this.route.navigateByUrl('/login');

});
}

//User Login:
LogIn(){
  console.log(this.logUser);
  let logIndata=this.logUser;
  this.uService.login(logIndata).subscribe((res:any)=>{
   console.log(res);
   alert('LogIn Successfully....!');
   if(res.message=='success'){
    localStorage.setItem('User',res.loggedUser);
    localStorage.setItem('token',res.token);
   }
   this.route.navigateByUrl('/todo');
  });
}

logOut(){
  // User LogOut:
  
}
}
