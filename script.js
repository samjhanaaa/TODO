const input = document.getElementById("todo-input");
const btnInput = document.getElementById("add-input");
const todoList = document.getElementById("todo-list");

function listDisplay() {
    const makeList = document.createElement("li");
    makeList.textContent = input.value;
    todoList.appendChild(makeList);
    input.value = "";

}