import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDragDropTodoComponent } from './angular-drag-drop-todo.component';

describe('AngularDragDropTodoComponent', () => {
  let component: AngularDragDropTodoComponent;
  let fixture: ComponentFixture<AngularDragDropTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDragDropTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDragDropTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
