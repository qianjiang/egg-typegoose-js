'use strict';

const assert = require('assert');
const mongoose = require('mongoose');

// let count = 0;

module.exports = async app => {
  app.addSingleton('mongoose', createOneClient);
};

async function createOneClient(config/* , app */) {

  assert(config.url && config.options,
    `[egg-typegoose-js] 'url: ${config.url}', 'options: ${config.options}' are required on config`);
  const connection = await mongoose.connect(config.url, config.options);
  // app.beforeStart(function* () {
  // });

  return connection;
}
