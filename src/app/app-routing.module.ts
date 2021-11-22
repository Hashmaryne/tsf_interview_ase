import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: TodolistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),[FormsModule]],
  exports: [RouterModule]
})
export class AppRoutingModule { }
