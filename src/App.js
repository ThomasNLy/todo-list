import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import InputField from "./InputField";
function App() {
  const [tasks, addTasks] = useState([]);

  let deleteItem = (item) => {
  
    let newList = [];
    tasks.forEach((task) => {
      
      if (task !== item) {
        console.log("found it");
        newList.push(task);
      }
    });
    addTasks(newList);
  };
  let listOfTasks = tasks.map((t) => {
    return (
      <div key={t}>
        <p>{t}</p>
        <button onClick={() => deleteItem(t)}>delete</button>
      </div>
    );
  });
  console.log(tasks);

  return (
    <div className="App">
      <InputField processInput={processInput} />
      {listOfTasks}
    </div>
  );

  function processInput(input) {
    console.log(input);
    addTasks((current) => [...current, input]); // used to push to an array in react
  }
}

export default App;
