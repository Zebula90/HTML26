// main.js
// Kaikki sovelluksen toiminnallisuus samassa tiedostossa
const STORAGE_KEY = "todo-tasks";

let tasks = [];

import {loadTasks} from "./js/storage2.js";
import {saveTasks, addTask, toggleTask, deleteTask} from "./js/tasks.js";
import {renderTasks} from "./js/taskview.js";

// Sovelluksen käynnistys
function init() {
  loadTasks();
  renderTasks();

  const form = document.getElementById("task-form");
  const input = document.getElementById("task-input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
      return;
    }

    addTask(text);
    renderTasks();

    input.value = "";
    input.focus();
  });
}

init();
