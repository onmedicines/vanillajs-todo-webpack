import "./styles.css";
import Tasks from "./Tasks";

const myday = new Tasks();

const newTaskButoon = document.querySelector("#new-task-container button");
const newTaskInput = document.querySelector("#new-task-container input");

newTaskButoon.addEventListener("click", (e) => {
  const task = newTaskInput.value;
  if (task) {
    myday.add(task);
    console.log(myday.tasks);
  }
});
