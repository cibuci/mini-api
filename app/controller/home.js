'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      this.ctx.body = { now: Date(), version: '1.0' };
    }
  }
  return HomeController;
};
