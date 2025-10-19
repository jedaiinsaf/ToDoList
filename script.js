const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "🗑️";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
  [...taskList.children].forEach(li => {
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });
    li.querySelector("span")?.addEventListener("click", () => {
      li.remove();
      saveTasks();
    });
  });
}

loadTasks();
