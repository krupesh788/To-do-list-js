function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var newTask = document.createElement("li");
    newTask.innerHTML = `
      ${taskInput.value}
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = ""; // Clear input after adding task
  }
}

function editTask(button) {
  var taskText = button.parentNode.firstChild;

//change this value using `{$}` ///
  var updatedTask = prompt("Edit task:", taskText.nodeValue);
  if (updatedTask !== null) {
    taskText.nodeValue = updatedTask;
  }
}

function deleteTask(button) {
  var taskItem = button.parentNode;
  taskItem.parentNode.removeChild(taskItem);
}