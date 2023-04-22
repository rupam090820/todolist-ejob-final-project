import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from './Model/todo';
import { TodoApiService } from './todo-api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit  {
public AllTodos:any=[];
public page:number=0;
public totalTodos:number=0;
public serachTodo:any='';
public newTodo:any=[];
public selectedTodo:any=[];
public loggedUser:any='';
constructor(private apiService:TodoApiService,private route:Router) {
  this.newTodo=new Todo('','',this.apiService.getDate());
}
ngOnInit(): void {
  this.populateTodos();
}
populateTodos(){
  this.apiService.getAllTods().subscribe((res:any)=>{
   //  console.log(res);
     console.table(res);
     this.AllTodos=res;
     this.totalTodos=res.length;
   });
   this.loggedUser=localStorage.getItem('User');
}
// Select Todo From TodoList :
Select(todo:any){
//  console.log(todo);
this.selectedTodo=todo;
console.log(this.selectedTodo);
this.newTodo=new Todo(
  this.selectedTodo.title,
  this.selectedTodo.description,
  this.apiService.getDate()
)

}


// Adding a new Todo :
AddTodo(){
  console.log(this.newTodo);
  this.apiService.addTodo(this.newTodo).subscribe((res:any)=>{
    console.log(res);
    alert(res.msg);
    this.populateTodos();
  });
}

//Updating Todo :
updateTodo(){
  console.log(this.newTodo);
  this.apiService.updateTodo(this.selectedTodo._id,this.newTodo).subscribe((res:any)=>{
    console.log(res);
    alert(res.msg);
    this.populateTodos();
  });
}
// Delete Todo:
deleteTodo(){
  let id=this.selectedTodo._id;
  console.log(id);
  this.apiService.deleteTodo(id).subscribe((res:any)=>{
    console.log(res);
    alert(res.msg);
    this.populateTodos();
  });
  
}

// user LogOut:
logOut(){
 localStorage.clear();
 alert('LogOut Successfully Done...!');
 this.route.navigateByUrl('/login');
}


}
