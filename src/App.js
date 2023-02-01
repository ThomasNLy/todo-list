import React, { useState } from "react";
import "./App.css";
import InputField from "./InputField";
import ToDoItem from "./ToDoItem";
function App() {
  const [tasks, addTasks] = useState([]);

  let deleteItem = (itemID) => {
    let newList = [];
    tasks.forEach((task, index) => {
      let currentID = `${index}${task}`;
      if (currentID !== itemID) {
        console.log("found it");
        newList.push(task);
      }
    });
    addTasks(newList);
  };
  let listOfTasks = tasks.map((task, index) => {
    let id = `${index}${task}`;
    return (
      <ToDoItem key={id} id={id} task={task} deleteItem={deleteItem} />
      // <div key={id}>
      //   <p>{task}</p>
      //   {/* on click needs to have a function that tells it what to do
      //   if clicking the button requires parameters to be passed than it needs to be a function called within the onclick function
      //   */}
      //   <button onClick={() => deleteItem(id)}>delete</button>
      // </div>
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
