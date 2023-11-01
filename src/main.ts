import './style.scss';
import $ from 'jquery';
import _ from 'underscore';

import TodoItem from './models/todo.model.ts';
import TodoView  from './views/todo.view.ts';
import TodoList from './collections/todo.collection.ts';

const $todoList = $('#todo-list');
const $addTodoButton = $('#add-todo-button');

// Представлення для кожного завдання
const todoList = new TodoList();

// Додаємо нове завдання до списку
function addTodo() {
  const taskText = prompt('Введіть текст завдання:');
  if (taskText) {
    const newTask = new TodoItem({ title: taskText, done: false });
    todoList.add(newTask);
  }
}

// Визначаємо подію для кнопки "Додати завдання"
$addTodoButton.on('click', addTodo);

// Відображаємо існуючі завдання
function renderTodos() {
  $todoList.empty();
  todoList.each((task: any) => {
    const view = new TodoView({ model: task });
    $todoList.append(view.render().el);
  });
}

// Оновлення списку завдань, коли вони змінюються
todoList.on('add remove reset', renderTodos);

// Викликаємо функцію для відображення початкового списку завдань
renderTodos();
