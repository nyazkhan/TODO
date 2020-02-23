import { Component, OnInit } from '@angular/core';
import { IAppState } from './store';
import { NgRedux, select } from '@angular-redux/store';
import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from './actions';
import { TASK } from './todo';
import { TodoService } from '../todo.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-redux-todo',
  templateUrl: './redux-todo.component.html',
  styleUrls: ['./redux-todo.component.scss']
})
export class ReduxTodoComponent implements OnInit {
  @select() todos;

  model: TASK = {
    id: null,
    title: '',
    desc: '',
    status: '1',
  };
  taskAction = 'add';
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private toDoService: TodoService,
  ) { }
  list: any;
  ngOnInit() {
    this.list = this.todos;
  }

  obSubmit() {
    if (this.taskAction === 'edit') {
      this.ngRedux.dispatch({ type: EDIT_TODO, todo: this.model });
      this.model = new TASK();
      this.model.status = '1';
      this.taskAction = 'add';
    } else {

      this.ngRedux.dispatch({ type: ADD_TODO, todo: this.model });
      this.model = new TASK();
      this.model.status = '1';
    }
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });

  }

}
