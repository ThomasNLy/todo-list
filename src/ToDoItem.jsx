import React, { useState } from "react";
import "./ToDoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
function ToDoItem(props) {
  const { id, task, deleteItem } = props;
  const [check, setCheck] = useState(false);

  let isChecked = () => {
    setCheck(!check);
  };

  return (
    <div className="to-do-item-container">
      <div className="checkmark-container">
        <input
          className="checkbox-round"
          type="checkbox"
          name="toDoItem"
          value={task}
          onChange={isChecked}
        />
      </div>

      <div className="task-container">
        <label htmlFor="toDoItem" className="checkbox-label">
          {task}
        </label>
        <p>date</p>
      </div>

      {/* <p>{task}</p> */}
      {/* on click needs to have a function that tells it what to do
        if clicking the button requires parameters to be passed than it needs to be a function called within the onclick function
        */}
      <button className="delete-button" onClick={() => deleteItem(id)}>
        {" "}
        <FontAwesomeIcon icon={faX} inverse />
      </button>
    </div>
  );
}

export default ToDoItem;
