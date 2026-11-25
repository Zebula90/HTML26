const STORAGE_KEY = "todo-tasks";
let tasks = [];
// Tehtävien lataaminen localStoragesta
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    tasks = saved ? JSON.parse(saved) : [];

    if (!Array.isArray(tasks)) {
      tasks = [];
    }
  } catch (error) {
    console.error("Lataus epäonnistui:", error);
    tasks = [];
  }
}

export {loadTasks};