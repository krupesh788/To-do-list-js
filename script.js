function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      let newTask = document.createElement("li");
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
    let taskText = button.parentNode.firstChild;
  
  //change this value using `{$}` ///
    let updatedTask = prompt("Edit task:", taskText.nodeValue);

    if (updatedTask !== null) {
      taskText.nodeValue = updatedTask;
    }
  }
  
  function deleteTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
  }