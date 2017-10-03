/**

**/
(() => {
  'use strict';

  const NotificationManager = require('./lib/notification-manager');

  class App {
    constructor() {
      this._notificationManager = new NotificationManager();
    }

    load(messageCenter) {
      return Promise.resolve()
      .then(() => this._notificationManager.load(messageCenter));
    }

    unload() {
      return Promise.resolve()
      .then(() => this._notificationManager.unload());
    }
  }

  module.exports = new App();
})();
