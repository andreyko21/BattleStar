import Backbone from 'backbone';
import _ from 'underscore';

const HeaderView = Backbone.View.extend({
  tagName: 'header',

    template: _.template(`
  <header class="header">
    <img src="/src/images/logo.svg" alt="logo">
    <h1><%= title %></h1>
    <p><%= subtitle %></p>
    <p>Версія</p>
    </header>
  `),

  initialize: function () {
    this.model.on('change', this.render, this);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default HeaderView;