'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      this.ctx.body = [];
    }
  }
  return HomeController;
};


// // app/controller/posts.js
// exports.index = function* () {
//   this.ctx.body = 'hi, egg';
// };
// exports.new = function* () {};
// exports.create = function* () {};
// exports.show = function* () {};
// exports.edit = function* () {};
// exports.update = function* () {};
// exports.destroy = function* () {};
