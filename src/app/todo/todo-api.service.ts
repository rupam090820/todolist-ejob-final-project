import { Injectable } from '@angular/core';
// Import HttpClient class :
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http:HttpClient) { }
  // Create a Current Date And Timestamp :
  getDate(){
    let dt=new Date();
    let d=dt.getDate();
    let m=dt.getMonth();
    let y=dt.getFullYear();

    let hour=dt.getHours();
    let min=dt.getMinutes();
    let sec=dt.getSeconds();
    let ft='';

    if(hour>=12){
      hour-=12;
      ft='PM'
    }else{
      ft='AM'
    }
    let customTimeStamp=d+'-'+m+'-'+y+' '+hour+':'+min+':'+sec+' '+ft;
    return customTimeStamp;
  }

 // Get All Todos From DataBase :
  getAllTods(){
    return this.http.get('https://todolist-api.glitch.me/api/todos');
  }
 // Adding New Todo On The Data Base :
 addTodo(data:any){
  return this.http.post('https://todolist-api.glitch.me/api/todo',data);
 }

 // selected Todo Update :
 updateTodo(id:any,data:any){
  return this.http.put('https://todolist-api.glitch.me/api/todo/'+id,data);
 }

 // Delete Todo From DataBase :
 deleteTodo(id:any){
  return this.http.delete('https://todolist-api.glitch.me/api/todo/'+id);
 }
}
