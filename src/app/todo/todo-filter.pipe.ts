import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(AllTodos:any,serachTodo:any):any {
    if(serachTodo.length>=3){
    let TodoSearch=AllTodos.filter((item:any)=>{
      if(item.title || item.declaration){
      return ((item.title.trim().toLowerCase()).includes(serachTodo.trim().toLowerCase()));
      }
    });
    return TodoSearch;
    }
    return AllTodos;
  }

}
