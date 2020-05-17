'use strict';

const assert = require('assert');
const mongoose = require('mongoose');
const path = require('path');

// let count = 0;

module.exports = async app => {
  app.addSingleton('typegoose', createOneClient);
};

async function createOneClient(config, app) {
  console.log(config);

  assert(config.url&&config.filetype,
    `[egg-typegoose-js] 'url: ${config.url}', filetype: ${config.filetype}, are required on config`);
  const connection = await mongoose.connect(config.url, config.options);
  app.beforeStart(async () => {
    // app.loadToApp()
    const modelDir = config.baseDir? config.baseDir: 'app/model';

    const loadDir = path.join(app.baseDir, modelDir);
    // console.log('loading ...',loadDir)

    app.loader.loadToApp(loadDir,'model',{
      match: '*.' + config.filetype, 
      initializer: (Model) => {
        console.log(Model)
        // return Model;
        return new Model().getModelForClass(Model)
      }
    });

    // console.log(app.model,'---------------------------')
  });

  return connection;
}
