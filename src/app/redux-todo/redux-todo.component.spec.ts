import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxTodoComponent } from './redux-todo.component';

describe('ReduxTodoComponent', () => {
  let component: ReduxTodoComponent;
  let fixture: ComponentFixture<ReduxTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduxTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
