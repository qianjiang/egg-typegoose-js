'use strict';

const mock = require('egg-mock');
const globby = require('globby');
const assert = require('assert');

describe('test/typegoose-js.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/typegoose-js-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, typegoose')
      .expect(200);
  });

  it('get model file', async () => {
    const paths = await globby('*.js');
  
    console.log(paths);
    assert(paths)
  });
});
