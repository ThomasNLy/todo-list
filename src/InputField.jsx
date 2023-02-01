import React, { useState } from "react";

function InputField(props) {
  const { processInput } = props;
  const [value, setValue] = useState("");
  function handleChange(event) {
    event.preventDefault();
    setValue(event.target.value);
  }
  function handleClick(event) {
    processInput(value);
  }
  //   processInput(value);
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
