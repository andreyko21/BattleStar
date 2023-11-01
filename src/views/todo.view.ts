import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

export default class TodoView extends Backbone.View {
  tagName = 'li';

  template = _.template($('#todo-template').html());

   events() {
    return {
      'click .toggle': 'toggleDone',
      'click .delete': 'deleteItem'
    };
  }

  initialize() {
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  }

  render() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }

  toggleDone() {
    console.log('toggleDone');
    this.model.set('done', !this.model.get('done'));
  }

  deleteItem() {
    this.model.destroy();
  }
}

