const input = document.getElementById("todo-input");
const btnInput = document.getElementById("add-input");
const todoList = document.getElementById("todo-list");

function addTask() {
    const makeList = document.createElement("li");
    makeList.textContent = input.value;

    const editTask = document.createElement("Button")
    editTask.textContent = "Edit";
    editTask.className = "edit-button";

    editTask.onclick = function edit() {
        const newEditTask = prompt("Edit", input)
        makeList.firstchild.textContent = newEditTask.trim()
    }

    todoList.appendChild(makeList);
    todoList.appendChild(editTask);

    input.value = "";



}




