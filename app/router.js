'use strict';

module.exports = app => {
  app.get('/', 'home.index');

  // user
  app.get('/login', app.controller.weapp.login);
  app.get('/user', app.controller.weapp.user);
  app.get('/cos_auth', app.controller.weapp.cos_auth);
};
