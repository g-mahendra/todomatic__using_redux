import React from "react";
import ToDoInputSide from "../components/ToDoInputSide";
import ToDoListSide from "../components/ToDoListSide";

const Index = () => {
  return (
    <div className="relative">
      <ToDoInputSide />
      <ToDoListSide />
    </div>
  );
};

export default Index;
