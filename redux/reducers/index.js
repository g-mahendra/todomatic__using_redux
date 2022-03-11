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
    case actionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case actionTypes.MARK_AS_COMPLETE:
      todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { ...state, todos };
    case actionTypes.DELETE_TODO:
      todos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos };
    case actionTypes.SELECT_TODO:
      const todo = state.todos.filter((todo) => todo.id === action.payload);
      return {
        ...state,
        selectedTodo: todo[0],
      };
    case actionTypes.UPDATE_TODO:
      todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          console.log("inside if");
          return { ...todo, content: action.payload.content };
        }
        return todo;
      });
      console.log(todos);
      return {
        ...state,
        todos: todos,
        selectedTodo: null,
      };
    default:
      return state;
  }
};

export default combineReducers({
  toDos: toDoReducer,
});
