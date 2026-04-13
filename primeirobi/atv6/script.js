const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function (event) {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    if (event.target.classList.contains("completed")) {
      event.target.remove();
    } else {
      event.target.classList.add("completed");
    }
  }
});
