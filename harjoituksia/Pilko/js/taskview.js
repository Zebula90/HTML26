const STORAGE_KEY = "todo-tasks";
let tasks = [];

import {saveTasks, addTask, toggleTask, deleteTask} from "/tasks.js";
// Tehtävien näyttäminen HTML-sivulla
function renderTasks() {
  const list = document.getElementById("task-list");
  const count = document.getElementById("task-count");

  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
      toggleTask(task.id);
      renderTasks();
    });

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) {
      span.style.textDecoration = "line-through";
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Poista";

    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
      renderTasks();
    });

    li.append(checkbox, span, deleteButton);
    list.appendChild(li);
  });

  const completed = tasks.filter((task) => task.completed).length;

  count.textContent = `Tehtäviä ${tasks.length}, valmiita ${completed}`;
}
export {renderTasks};