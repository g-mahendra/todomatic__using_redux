import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addToDoItem, updateToDo } from "../redux/actions";

const ToDoInputSide = ({ toDos, addToDoItem, selectedTodo, updateToDo }) => {
  const [taskContent, setTaskContent] = useState("");

  useEffect(() => {
    if (selectedTodo) {
      setTaskContent(selectedTodo.content);
    }
  }, [selectedTodo]);

  const handleToDoSubmit = (event) => {
    event.preventDefault();
    if (selectedTodo) {
      updateToDo(taskContent, selectedTodo.id);
    } else {
      const task = {
        id: toDos.length + 1,
        content: taskContent,
        completed: false,
      };
      addToDoItem(task);
    }
    setTaskContent("");
  };

  return (
    <div className="relative md:fixed w-full md:w-3/4 min-h-screen h-screen inset-0 bg-stone-900">
      <div className="flex flex-col justify-between p-6 h-full">
        <div>
          <h1 className="text-4xl text-white font-bold">ToDoMatic</h1>
        </div>
        <form
          onSubmit={handleToDoSubmit}
          className="h-5/6 flex flex-col justify-center space-y-4"
        >
          <h2 className="md:text-3xl text-2xl text-white font-semibold">
            What's on your mind buddy ?
          </h2>
          <input
            type="text"
            className="outline-1 md:w-1/2 bg-stone-800 p-2 rounded text-white placeholder:text-gray-400 "
            placeholder="Enter the title for a new ToDo item"
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
          />
          <button
            type="submit"
            className="md:w-1/5 w-1/2 bg-green-400 hover:bg-green-600 p-2 rounded"
          >
            {selectedTodo ? "Save" : "Add Item"}
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state.toDos.todos, selectedTodo: state.toDos.selectedTodo };
};

export default connect(mapStateToProps, { addToDoItem, updateToDo })(
  ToDoInputSide
);
