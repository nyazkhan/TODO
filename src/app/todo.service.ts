import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todolist: AngularFireList<any>;
  subTaskList: AngularFireList<any>;

  taskList: AngularFireList<any>;

  constructor(private firebasedb: AngularFirestore) {


  }
  // get task list

  getTodolist() {

    return this.firebasedb.collection('Task').get();

  }


  // add new task list

  addTask(taskList) {
    // this.firebasedb.collection('ReduxTask').add(taskList);
    // return this.firebasedb.collection('ReduxTask').get();

  }


  // update task
  updateTask(task) {
    const id = task.id;


    this.firebasedb.collection('Task').doc(id).update(task);

  }
}
