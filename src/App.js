import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";
import ToDoItem from "./components/ToDoItem";
import OrderingDropDownMenu from "./components/OrderingDropDownMenu";
function App() {
  const [tasks, setTasks] = useState([]);

  let deleteItem = (itemID) => {
    let newList = [];
    tasks.forEach((task, index) => {
      let currentTask = task.task;
      let currentID = `${index}${currentTask}`;
      if (currentID !== itemID) {
        // console.log("found it");
        newList.push(task);
      }
    });
    setTasks(newList);
  };
  let listOfTasks = tasks.map((task, index) => {
    let currentTask = task.task;
    let id = `${index}${currentTask}`;
    let date = `${task.date.getFullYear()}-${
      task.date.getMonth() + 1
    }-${task.date.getDate()}`;
    return (
      <ToDoItem
        key={id}
        id={id}
        task={currentTask}
        deleteItem={deleteItem}
        date={date}
      />
      // <div key={id}>
      //   <p>{task}</p>
      //   {/* on click needs to have a function that tells it what to do
      //   if clicking the button requires parameters to be passed than it needs to be a function called within the onclick function
      //   */}
      //   <button onClick={() => deleteItem(id)}>delete</button>
      // </div>
    );
  });
  //console.log(tasks);

  return (
    <div className="App">
      <InputField processInput={processInput} />
      <OrderingDropDownMenu sortOldest={sortOldest} sortNewest={sortNewest} />
      {listOfTasks}
    </div>
  );

  function processInput(input) {
    //console.log(input);
    setTasks((current) => [...current, input]); // used to push to an array in react
  }

  function sortOldest() {
    console.log("sorted oldest");
    let tempList = [...tasks]; // needs to create a new array and manually add items from state array than organize it to force a rerender
    for (let i = 0; i < tempList.length; i++) {
      let currentTask = tempList[i];
      let prevIndex = i - 1;

      while (
        prevIndex >= 0 &&
        tempList[prevIndex].date.getTime() > currentTask.date.getTime()
      ) {
        tempList[prevIndex + 1] = tempList[prevIndex];
        prevIndex--;
      }
      tempList[prevIndex + 1] = currentTask;
    }
    setTasks(tempList);
  }

  function sortNewest() {
    let newList = [...tasks];
    for (let i = 0; i < newList.length; i++) {
      let currentTask = newList[i];
      console.log(currentTask.date.getTime());
      let currentIndex = i;
      let prevIndex = i - 1;
      while (
        prevIndex >= 0 &&
        currentTask.date.getTime() > newList[prevIndex].date.getTime()
      ) {
        newList[currentIndex] = newList[prevIndex];
        currentIndex = prevIndex;

        prevIndex--;
      }
      newList[currentIndex] = currentTask;
    }
    setTasks(newList);

    // sortOldest();
    // let newList = [];
    // for (let i = tasks.length - 1; i >= 0; i--) {
    //   newList.push(tasks[i]);
    // }
    // console.log(newList);
    // console.log("sorted newest");
    // setTasks(newList);
  }
}

export default App;
