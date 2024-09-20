
const input = document.getElementById("todo-input");
const btnInput = document.getElementById("add-input");
const todoList = document.getElementById("todo-list");


function addTask() {
    //create a div to add list items, edit and delete button
    const taskContainer = document.createElement("div");
    taskContainer.className = "task-container";

    // Create checkbox for the task
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    //create space to add list item
    const makeList = document.createElement("span");
    makeList.textContent = input.value;

    //button to edit task
    const editTask = document.createElement("Button")
    editTask.textContent = "Edit";
    editTask.className = "edit-button";

    //button to delete task
    const deleteTask = document.createElement("Button")
    deleteTask.textContent = "Delete";
    deleteTask.className = "delete-button";

    //function to edit 
    editTask.onclick = function edit() {
        const newEditTask = prompt("Edit", makeList.textContent)
        makeList.firstChild.textContent = newEditTask.trim()
    }

    //function to delete
    deleteTask.onclick = function () {
        taskContainer.remove();
    }

    //add list , edit and delete to task container
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(makeList);
    taskContainer.appendChild(editTask);
    taskContainer.appendChild(deleteTask);

    // add task to display in todo list
    todoList.appendChild(taskContainer);


    //clear input space
    input.value = "";

}




