import Backbone from 'backbone';
import _ from 'underscore';
import imgUrl from '/src/images/logo.svg';

const HeaderView = Backbone.View.extend({
  tagName: 'header',
  className: 'header',

    template: _.template(`
  <img src="${imgUrl}" alt="logo" />
  <h1><%= title %></h1>
  <p><%= subtitle %></p>
  <p>Версія</p>
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