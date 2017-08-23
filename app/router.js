'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.resources('cards', '/api/cards', app.controller.cards);
};
