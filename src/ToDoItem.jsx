import React from "react";
import "./ToDoItem.css";
function ToDoItem(props) {
  const { id, task, deleteItem } = props;

  return (
    <div className="toDoItem">
      <p>{task}</p>
      {/* on click needs to have a function that tells it what to do
        if clicking the button requires parameters to be passed than it needs to be a function called within the onclick function
        */}
      <button onClick={() => deleteItem(id)}>delete</button>
    </div>
  );
}

export default ToDoItem;
