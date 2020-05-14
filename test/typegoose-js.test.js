'use strict';

const mock = require('egg-mock');

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
      .expect('hi, typegooseJs')
      .expect(200);
  });
});
