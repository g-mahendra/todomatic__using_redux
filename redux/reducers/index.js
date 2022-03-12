import * as actionTypes from "../types";
import { combineReducers } from "redux";

const initialState = {
  todos: [
    {
      id: 1,
      content:
        "Sample completed todo which is indicated by a strike through it and disabled Edit button",
      completed: true,
    },
    { id: 2, content: "Sample incomplete todo", completed: false },
  ],
  selectedTodo: null,
};

const toDoReducer = (state = initialState, action) => {
  let todos = [];
  switch (action.type) {
    // A case to add a todo item
    case actionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    // A case to mark a todo as complete
    case actionTypes.MARK_AS_COMPLETE:
      todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { ...state, todos };

    // A case to delete a ToDo
    case actionTypes.DELETE_TODO:
      todos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos };

    // A case to select a specific ToDo
    case actionTypes.SELECT_TODO:
      const todo = state.todos.filter((todo) => todo.id === action.payload);
      return { ...state, selectedTodo: todo[0] };

    // A case to Update the selected ToDo
    case actionTypes.UPDATE_TODO:
      todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, content: action.payload.content };
        }
        return todo;
      });
      return { ...state, todos, selectedTodo: null };

    // A case to mark all toDos as Done/ Coompleted
    case actionTypes.MARK_ALL_AS_DONE:
      todos = state.todos.map((todo) => {
        return { ...todo, completed: true };
      });
      return { ...state, todos };

    // A case to delete all toDos which are done
    case actionTypes.DELETE_ALL_COMPLETED:
      todos = state.todos.filter((todo) => !todo.completed);
      return { ...state, todos };

    // Default action if none of the above action matches
    default:
      return state;
  }
};

export default combineReducers({
  toDos: toDoReducer,
});
