import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularDragDropTodoComponent } from './angular-drag-drop-todo/angular-drag-drop-todo.component';
import { ReduxTodoComponent } from './redux-todo/redux-todo.component';


const routes: Routes = [
  { path: '', redirectTo: '/angular', pathMatch: 'full' },
  { path: 'angular', component:  AngularDragDropTodoComponent},
  { path: 'redux', component: ReduxTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
