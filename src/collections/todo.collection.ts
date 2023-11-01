import _ from 'underscore';
import Backbone from 'backbone';
import TodoItem from '../models/todo.model';

const TodoList = Backbone.Collection.extend({
  model: TodoItem
});

export default TodoList;