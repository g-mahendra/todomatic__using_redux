import React from "react";
import { connect } from "react-redux";
import {
  toggleToDoCompleteState,
  deleteTodo,
  selectToDo,
  markAllToDosAsDone,
  deleteAllCompletedToDos,
} from "../redux/actions";

const ToDoListSide = ({
  allToDos,
  toggleToDoCompleteState,
  deleteTodo,
  selectToDo,
  markAllToDosAsDone,
  deleteAllCompletedToDos,
}) => {
  const handleToDoComplete = (id) => toggleToDoCompleteState(id);
  const handleToDoDelete = (id) => deleteTodo(id);
  const handleToDoSelect = (id) => selectToDo(id);
  const handleMarkAllDone = () => markAllToDosAsDone();
  const handleDeleteAllCompletedToDos = () => deleteAllCompletedToDos();

  return (
    <div className="w-full md:w-1/4 ml-auto min-h-screen bg-stone-800 text-white py-7">
      <h2 className="text-3xl font-semibold">All ToDo Items</h2>
      <div
        className={`flex-1 overflow-y-scroll px-4 pb-5 ${
          allToDos.length === 0
            ? "flex flex-col justify-center items-center h-screen pb-20"
            : ""
        }`}
      >
        {allToDos.length !== 0 ? (
          allToDos.map((toDoItem) => {
            return (
              <div
                className="bg-stone-900 py-4 pb-0 my-4 rounded rounded-br-2xl rounded-bl-2xl"
                key={toDoItem.id}
              >
                <div
                  onClick={() => handleToDoComplete(toDoItem.id)}
                  className="px-2 hover:cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="mr-2 h-5 w-5 transition ease-in-out delay-200"
                    checked={toDoItem.completed}
                    readOnly
                  />
                  {toDoItem.completed ? (
                    <del>{toDoItem.content}</del>
                  ) : (
                    <span>{toDoItem.content}</span>
                  )}
                </div>
                <div className="w-full flex justify-evenly mt-6">
                  <button
                    onClick={() => handleToDoSelect(toDoItem.id)}
                    className="w-1/2 text-xs py-3 bg-stone-700 rounded-bl-2xl hover:bg-[#202020] disabled:bg-stone-400 transition ease-in-out delay-200"
                    disabled={toDoItem.completed}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleToDoDelete(toDoItem.id)}
                    className="w-1/2 text-xs py-3 bg-red-600 rounded-br-2xl hover:bg-red-800 transition ease-in-out delay-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h3 className="text-center text-xs">
            No items here! <br />
            Add items to the list using the fields given on the left
          </h3>
        )}
      </div>
      {allToDos.length !== 0 && (
        <div className="fixed bottom-0 md:w-1/4 w-full bg-stone-900">
          <button
            onClick={handleMarkAllDone}
            className="hover:bg-blue-700 border-2 border-stone-700 text-xs p-3 w-1/2  transition ease-in-out delay-200"
          >
            Mark all as Done
          </button>
          <button
            onClick={handleDeleteAllCompletedToDos}
            className="bg-transparent border-stone-700 border-2 hover:bg-red-600 hover:text-white text-xs p-3 w-1/2  transition ease-in-out delay-200"
          >
            Delete all Done
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allToDos: state.toDos.todos,
  };
};

export default connect(mapStateToProps, {
  toggleToDoCompleteState,
  deleteTodo,
  selectToDo,
  markAllToDosAsDone,
  deleteAllCompletedToDos,
})(ToDoListSide);
