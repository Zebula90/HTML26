const STORAGE_KEY = "todo-tasks";
let tasks = [];
// Uuden tehtävän lisääminen
// Tehtävien tallentaminen localStorageen
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function addTask(text) {
  const task = {
    id: crypto.randomUUID(),
    text: text,
    completed: false,
  };

  tasks.push(task);
  saveTasks();
}


// Tehtävän tilan vaihtaminen
function toggleTask(id) {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = !task.completed;
    saveTasks();
  }
}

// Tehtävän poistaminen
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
}

export {addTask, toggleTask, saveTasks, deleteTask};