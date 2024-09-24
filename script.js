
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
        updateStorage()
    }

    //function to delete
    deleteTask.onclick = function () {
        taskContainer.remove();
        updateStorage()
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

    updateStorage()
}


// Function to update localStorage with current tasks
function updateStorage() {
    const tasks = [];
    const taskContainers = document.querySelectorAll(".task-container");

    taskContainers.forEach(container => {
        const taskText = container.querySelector("span").textContent;
        tasks.push(taskText);  // Collect all task text
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to display tasks stored in localStorage
function displayStorage() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    storedTasks.forEach(taskText => {
        const taskContainer = document.createElement("div");
        taskContainer.className = "task-container";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const makeList = document.createElement("span");
        makeList.textContent = taskText;

        const editTask = document.createElement("button");
        editTask.textContent = "Edit";
        editTask.className = "edit-button";

        const deleteTask = document.createElement("button");
        deleteTask.textContent = "Delete";
        deleteTask.className = "delete-button";

        // Function to edit task
        editTask.onclick = function () {
            const newEditTask = prompt("Edit", makeList.textContent);
            if (newEditTask !== null && newEditTask.trim()) {
                makeList.textContent = newEditTask.trim();
                updateStorage();  // Update localStorage with new value
            }
        };

        // Function to delete task
        deleteTask.onclick = function () {
            taskContainer.remove();
            updateStorage();  // Update localStorage after deleting the task
        };

        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(makeList);
        taskContainer.appendChild(editTask);
        taskContainer.appendChild(deleteTask);

        todoList.appendChild(taskContainer);
    });
}

// Display stored tasks when the page loads
displayStorage();
