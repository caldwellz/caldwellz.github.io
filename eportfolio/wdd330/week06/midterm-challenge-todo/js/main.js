import TodoList from './TodoList.js';
import {setOnClick, setClassOnClick, setClassOnInput} from './utilities.js';

// Load and display the initial todo list
const todos = new TodoList();
var todoFilter = 'all';
reloadTasks();


// Function to reload tasks / task count and set up event handlers
function reloadTasks() {
  // Filter the todos
  var todoList = null;
  if (todoFilter === 'active')
    todoList = todos.filterTodos(false);
  else if (todoFilter === 'completed')
    todoList = todos.filterTodos(true);

  // Update the todo list HTML
  document.getElementById("todo-list").innerHTML = todos.renderTodoList(todoList);
  recreateTaskEvents();

  // Update the number of tasks remaining
  const tasksLeftElem = document.getElementById("tasks-left");
  const numIncomplete = todos.filterTodos(false).length;
  if (numIncomplete === 1)
    tasksLeftElem.innerHTML = "1 task left";
  else
    tasksLeftElem.innerHTML = numIncomplete + " tasks left";
}


// Function to set up / recreate event handlers on individual tasks
function recreateTaskEvents() {
  // Task completion
  setClassOnInput("task-checkbox", function () {
    var taskID = this.dataset.taskId;
    var status = this.checked;
    todos.completeTodo(taskID, status);
    reloadTasks();
  });

  // Task deletion
  setClassOnClick("task-remove-btn", function () {
    var taskID = this.dataset.taskId;
    todos.removeTodo(taskID);
    reloadTasks();
  });
}


// Create new-task button event listener
setOnClick("new-task-btn", function () {
  const newTaskText = document.getElementById("new-task-content");
  todos.addTodo(newTaskText.value);
  newTaskText.value = '';
  reloadTasks();
});


// Create filter buttons event listener
setClassOnClick("task-filter-btn", function () {
  // Re-enable current filter
  document.getElementById("task-filter-" + todoFilter).removeAttribute("disabled");
  // Disable new filter button
  this.setAttribute('disabled', '');
  // Update filter string and reload
  todoFilter = this.id.split('-')[2];
  reloadTasks();
});
