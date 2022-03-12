import {
  ADD_TODO,
  MARK_AS_COMPLETE,
  DELETE_TODO,
  SELECT_TODO,
  UPDATE_TODO,
  MARK_ALL_AS_DONE,
  DELETE_ALL_COMPLETED,
} from "../types";

const addToDoItem = (task) => {
  return {
    type: ADD_TODO,
    payload: task,
  };
};

const toggleToDoCompleteState = (id) => {
  return {
    type: MARK_AS_COMPLETE,
    payload: id,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

const selectToDo = (id) => {
  return {
    type: SELECT_TODO,
    payload: id,
  };
};

const updateToDo = (content, id) => {
  return {
    type: UPDATE_TODO,
    payload: {
      content,
      id,
    },
  };
};

const markAllToDosAsDone = () => {
  return {
    type: MARK_ALL_AS_DONE,
  };
};

const deleteAllCompletedToDos = () => {
  return {
    type: DELETE_ALL_COMPLETED,
  };
};

export {
  addToDoItem,
  toggleToDoCompleteState,
  deleteTodo,
  selectToDo,
  updateToDo,
  markAllToDosAsDone,
  deleteAllCompletedToDos,
};
