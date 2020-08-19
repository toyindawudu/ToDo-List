// Select the elemeents in the HTML
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Create event listeners
todoButton.addEventListener("click", addTodo);

// Create functions here
function addTodo(event){

  // Prevent the event action from taking place
  event.preventDefault();

  // Create the TODO div activity
  const todoDiv = document.createElement("div");
  todoDiv.classList.add('todo');
  
  // Create Li
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-item');
  // newTodo.classList.add('Hey');
  todoDiv.appendChild(newTodo);

  // Create checked button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  // Create delete button
  const deletedButton = document.createElement('button');
  deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
  deletedButton.classList.add('delete-btn');
  todoDiv.appendChild(deletedButton);

  //Append to the TODO list
  todoList.appendChild(todoDiv);
}