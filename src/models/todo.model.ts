import Backbone from 'backbone';

interface TodoItemAttributes {
  title: string;
  done: boolean;
}

class TodoItem extends Backbone.Model<TodoItemAttributes> {
  defaults() {
    return {
      title: '',
      done: false,
    };
  }
}

export default TodoItem;