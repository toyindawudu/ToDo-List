// Select the elemeents in the HTML
const todoInput = document.getElementsByClassName('todo-input');
const todoButton = document.getElementsByClassName('todo-button');
const todoList = document.getElementsByClassName('todo-list');

// Create event listeners
todoButton.addEventListener('click', addTodo);

// Create functions here
function addTodo(event){
  console.log('Hello');

  // Prevent
  event.preventDefault();
}