import {saveItem, loadItem} from './ls.js';

// Class representing a to-do list
export default class TodoList {
  constructor(saveKey) {
    this._saveKey = saveKey || 'todoList';
    this._todos = loadItem(this._saveKey, []);
  }
  
  
  // Compact the internal array and save to localStorage
  save() {
    this._todos = this._todos.filter(function (item) {
      return (item && item.id);
    });
    saveItem(this._saveKey, this._todos);
  }
  
  
  addTodo(content) {
    if (content && content.length) {
      var newTodo = {
        id: Date.now()
      , content: String(content)
      , completed: false
      };
      var position = this._todos.push(newTodo);
      this.save();

      return position;
    }
    
    return null;
  }
  
  
  _findPosition(id) {
    for (var item in this._todos) {
      var todo = this._todos[item];
      if (todo.hasOwnProperty('id') && id == todo.id) // Only double-equal so it can match string IDs too
        return item;
    }
    
    return null;
  }
  
  
  removeTodo(id) {
    var pos = this._findPosition(id);
    delete this._todos[pos];
    this.save();
  }
  
  
  completeTodo(id, complete) {
    var pos = this._findPosition(id);
    if (pos !== null) {
      this._todos[pos].completed = !!complete;
      this.save();
    }
  }
  
  
  listTodos() {
    return this._todos;
  }
  
  
  filterTodos(completion) {
    return this._todos.filter(function (item) {
      return (item.completed === !!completion);
    });
  }
  
  
  getAllIncomplete() {
    var incompleteTodos = [];
    for (var item in this._todos) {
      var todo = this._todos[item];
      if (todo.hasOwnProperty('completed') && !todo.completed)
        incompleteTodos.push(todo);
    }
    
    return incompleteTodos;
  }
  
  
  renderTodo(todo) {
    var output = '<div class="todo-item">';
    output += '<input type="checkbox" class="task-checkbox" data-task-id="' + todo.id + '"';
    if (todo.completed)
      output += ' checked';

    output += '><span class="task-content';
    if (todo.completed)
      output += ' completed-task';

    output += '">' + todo.content + '</span>';
    output += '<button class="task-remove-btn" data-task-id="' + todo.id + '">&times;</button></div>';
    
    return output;
  }
  
  
  renderTodoList(listArray) {
    listArray = listArray || this._todos;
    var output = '';
    for (var i = 0; i < listArray.length; i++) {
      var item = listArray[i];
      if (item)
        output += this.renderTodo(item); 
    }

    return output;
  }
};
