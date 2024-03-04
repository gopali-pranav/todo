function renderTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const todoList = document.getElementById("items");
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = `${todo}
        <button class='delete-btn'><i class="las la-trash"></i></button>`;
    todoList.appendChild(todoItem);
  });
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      deleteTodo(index);
    });
  });
}
function addTodo() {
  let todoInput = document.getElementById("inputText");
  let todoText = todoInput.value.trim();
  if (todoText !== "") {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
    renderTodos();
  }
}
function deleteTodo(index) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

renderTodos();
