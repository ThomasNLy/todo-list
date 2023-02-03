import React, { useState } from "react";
import "./InputField.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";
function InputField(props) {
  const { processInput } = props;
  const [value, setValue] = useState({ task: "", date: 0 });
  function handleChange(event) {
    event.preventDefault();
    const date = new Date();

    setValue({ task: event.target.value, date: date });
  }
  function handleClick(event) {
    processInput(value);
  }
  return (
    <React.Fragment>
      <div className="inputfield-container">
        <input
          type="text"
          name=""
          id=""
          placeholder="Add new item"
          onChange={handleChange}
          className="inputfield"
        />
        <button type="submit" onClick={handleClick} className="add-task-button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </React.Fragment>
  );
}
export default InputField;
