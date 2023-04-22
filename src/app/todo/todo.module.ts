import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
//import HttpClient Module for Http Request:
import{HttpClientModule} from '@angular/common/http';
//Import ngx-pagination :
import { NgxPaginationModule } from 'ngx-pagination';
import { TodoFilterPipe } from './todo-filter.pipe';
//Import FormsModule :
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoComponent,
    TodoFilterPipe
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule ,// Declare here........
    NgxPaginationModule,
    FormsModule
  ]
})
export class TodoModule { }
