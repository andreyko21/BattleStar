import './scss/style.scss';
import './scss/index.scss';
import $ from 'jquery';
import _ from 'underscore';

import HeaderView from './views/header.view.ts';
import HeaderModel from './models/header.model.ts';

const headerModel = new HeaderModel({
  title: 'Заголовок вашого додатку',
  subtitle: 'Підзаголовок або опис'
});

const headerView = new HeaderView({ model: headerModel });

document.body.prepend(headerView.el);



headerView.render();

import TodoItem from './models/todo.model.ts';
import TodoView  from './views/todo.view.ts';
import TodoList from './collections/todo.collection.ts';



const $todoList = $('#todo-list');
const $addTodoButton = $('#add-todo-button');
const todoList = new TodoList();



function addTodo() {
  const taskText = prompt('Введіть текст завдання:');
  if (taskText) {
    const newTask = new TodoItem({ title: taskText, done: false });
    todoList.add(newTask);
  }
}

$addTodoButton.on('click', addTodo);

function renderTodos() {
  $todoList.empty();
  todoList.each((task: any) => {
    const view = new TodoView({ model: task });
    $todoList.append(view.render().el);
  });
}

todoList.on('add remove reset', renderTodos);

renderTodos();

