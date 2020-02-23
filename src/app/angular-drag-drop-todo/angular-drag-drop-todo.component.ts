import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoService } from '../todo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
export class TASK {
  id: null;
  title: string;
  desc: string;
  status: string;
}
enum COLORS {
  SKYBLUE = '#46185f',
  BLUE = '#5f6caf',
  GREEN = '#76ff03',
  YELLOW = '#ffca28',
  RED = '#dd2c00'
}

declare const $: any;
@Component({
  selector: 'app-angular-drag-drop-todo',
  templateUrl: './angular-drag-drop-todo.component.html',
  styleUrls: ['./angular-drag-drop-todo.component.scss']
})
export class AngularDragDropTodoComponent implements OnInit {




  // task list with deffrent status
  list: any = {
    id: null,
    todolistArray: [
      {
        id: 0,
        name: 'Pending Task ',
        tasksList: []
      },
      {
        id: 1,
        name: 'Todays Task ',
        tasksList: []
      },
      {
        id: 2,
        name: 'Inprogress Task ',
        tasksList: []
      },
      {
        id: 3,
        name: 'Abandon Task ',
        tasksList: []
      },
      {
        id: 4,
        name: 'Complete Task ',
        tasksList: []
      },

    ]
  };

  taskForm: any = {};

  modelPurposeForOpen: string;

  constructor(
    private toDoService: TodoService,
  ) {

    // get to list from backend
    this.toDoService.getTodolist().subscribe((res => {
      res.forEach((elem) => {
        const id = elem.id;
        const data = elem.data();
        data.id = id;
        this.list = data;

      });
    }));
  }


  ngOnInit() {

  }




  // drag and drop fuction responsible for movment and updation of diffrent status task

  drop(event: CdkDragDrop<string[]>, index) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    // update task status after moveing
    this.list.todolistArray[index].tasksList[event.currentIndex].status = index;

    // update data base
    this.toDoService.updateTask(this.list);

  }

  // bg-color for task card
  getColor(index) {
    switch (index) {
      case 1:
        return COLORS.YELLOW;
      case 2:
        return COLORS.BLUE;
      case 3:
        return COLORS.SKYBLUE;
      case 4:
        return COLORS.RED;

      case 5:
        return COLORS.GREEN;

    }
  }

  // open model
  openModel(purpose, task?) {

    this.modelPurposeForOpen = purpose;
    this.taskForm.status = '1';

    if (task) {
      this.taskForm = task;

    }
    $('#taskModel').modal();

  }

  // closed model
  closeModel() {
    $('#taskModel').modal('hide');

  }

  // delete task and update database
  delete(array, index) {

    array.splice(index, 1);

    // update firebase database
    this.toDoService.updateTask(this.list);

  }


  // add new task
  Addtask(val) {

    if (this.modelPurposeForOpen === 'Add') {

      this.list.todolistArray[val.status].tasksList.push(val);
    }

    delete this.taskForm;
    this.taskForm = {};
    this.toDoService.updateTask(this.list);
    this.closeModel();

  }





}
