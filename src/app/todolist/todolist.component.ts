import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import {ActivityComponent} from "../activity/activity.component";
import { Todo } from 'src/classes/todo';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  constructor() { }
  activities: Todo[];
  newActivity:string;
  todoDate:Date; 
  todoStatus:boolean;
  ngOnInit() {
    this.activities=[];
    this.newActivity='';
   
  }
    
  addStatus(){
    this.todoStatus=true;
  }  

  public addToList() {
      if (this.newActivity == '') {
      }
      else {
          this.activities.push({
          name: this.newActivity,
          date: this.todoDate,
          status: this.todoStatus
        });
        this.newActivity = '';
        this.todoDate = null;
        this.todoStatus = false;
      }
  }

  deleteTask(item) {
    this.activities = this.activities.filter(todo => todo !== item);
      
  }
  
  

}
