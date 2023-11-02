import './scss/style.scss';
import './scss/index.scss';
import $ from 'jquery';
import _ from 'underscore';
import TodoItem from './models/todo.model.ts';
import TodoView  from './views/todo.view.ts';
import TodoList from './collections/todo.collection.ts';
import Backbone from 'backbone';


import HeaderView from './views/header.view.ts';
import HeaderModel from './models/header.model.ts';

const headerModel = new HeaderModel({
  title: 'Привіт, світ!',
  subtitle: 'Підзаголовок або опис'
});

const headerModel2 = new HeaderModel({
  title: 'Пока',
  subtitle: 'Підзаголовок або опис'
});

const headerView = new HeaderView({ model: headerModel });
const headerView2 = new HeaderView({ model: headerModel2 });
document.body.prepend(headerView.el);



headerView.render();
headerView2.render();



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

const Workspace = Backbone.Router.extend({
    routes: {
    "help": "help",
      
        "search/:query": "search",
        "search/:query/p:page": "search"
    },

    help: function () {
        $("#content").html(headerView2.el);
    },

    search: function (query: string, page: string) {
        $("#content").html("<p>Search Results for: " + query + "</p>");
        if (page) {
            $("#content").append("<p>Page: " + page + "</p>");
        }
    }
});

new Workspace();

// Start listening for route changes
Backbone.history.start();