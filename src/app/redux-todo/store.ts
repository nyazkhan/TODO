import {  TASK } from './todo';
import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from './actions';

export interface IAppState {
    todos: TASK[];
}

export const INITIAL_STATE: IAppState = {
    todos: [],
};

export function rootReducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
            });

        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id),
            });

        case EDIT_TODO:
            console.log(state.todos);
            const todo = state.todos.find(t => t.id === action.todo.id);
            const index = state.todos.indexOf(todo);


            return Object.assign({}, state, {
                todos: [

                    ...state.todos.slice(0, index),
                    Object.assign({}, todo),
                    ...state.todos.slice(index + 1)
                ],
            });

    }
    return state;
}

