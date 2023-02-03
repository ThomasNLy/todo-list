import React, { useState } from "react";

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
      <input
        type="text"
        name=""
        id=""
        placeholder="todo"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </React.Fragment>
  );
}
export default InputField;
