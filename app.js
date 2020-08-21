// Select the elemeents in the HTML
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Create event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItem);
filterOption.addEventListener("click", filterTodo);

// Create functions here
function addTodo(event){

  // Prevent the event action from taking place
  event.preventDefault();

  // Create the TODO div activity
  const todoDiv = document.createElement("div");
  todoDiv.classList.add('todo');
  
  // Create Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  // Save to local storage
  saveLocalTodos(todoInput.value);

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

  // Clear Todo Input value
  todoInput.value = '';
}

function deleteItem(event){
  const item = event.target;
  // Delete the todo activity
  if (item.classList[0] === "delete-btn"){
    const todo = item.parentElement;
    //Animation
    todo.classList.add('fall');
    removeLocalStorageTodos(todo);
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
    
  }
  // Completed the todo activity
  if (item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display = 'flex';
        break;
      case "completed":
        if(todo.classList.contains('completed')){
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains('completed')){
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}


function saveLocalTodos(todo){
  // Check --- Are there items in the local storage already?
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push();
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
  let todos;
  // Is there anything in the local storage already?
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo) {
    // Create the TODO div activity
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    
    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
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

  })
}

function removeLocalStorageTodos(todo){
  let todos;
  // Is there anything in the local storage already?
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
}