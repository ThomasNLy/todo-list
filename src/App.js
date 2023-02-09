import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";
import ToDoItem from "./components/ToDoItem";
import OrderingDropDownMenu from "./components/OrderingDropDownMenu";
function App() {
  const [tasks, setTasks] = useState([]);
  const [oldestToNewest, setOldestToNewest] = useState(true);

  let setOrdering = (value) => {
    setOldestToNewest(value);
  };

  let deleteItem = (itemID) => {
    let newList = [];
    tasks.forEach((task, index) => {
      let currentTask = task.task;
      let currentID = `${index}${currentTask}`;
      if (currentID !== itemID) {
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
    );
  });
  //console.log(tasks);

  return (
    <div className="App">
      <InputField processInput={processInput} />
      <OrderingDropDownMenu
        sortOldest={sortOldest}
        sortNewest={sortNewest}
        setOrdering={setOrdering}
      />
      {listOfTasks}
    </div>
  );

  function processInput(input) {
    //based on whether the order is newest to oldest it will add the new item at the bottom or top of list
    //is unable to rerender the dom if calling the sorting functions
    setTasks(
      oldestToNewest
        ? (current) => [...current, input]
        : (current) => [input, ...current]
    );
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
  }
}

export default App;
