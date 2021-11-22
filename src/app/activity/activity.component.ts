
import { Component, Output, Input, EventEmitter,OnInit } from '@angular/core';
import { Todo } from 'src/classes/todo';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent{
  @Input() todo: Todo;
  @Output() deleteItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  deleteTodo(todo: Todo): void {
    this.deleteItem.emit(todo);
  }

 
}
