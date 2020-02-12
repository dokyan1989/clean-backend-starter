'use strict';

const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const { start } = require('../lib/server');

describe('GET /', () => {
  let server;

  beforeEach(async () => {
    server = await start(false);
  });

  afterEach(async () => {
    await server.stop();
  });

  it('responds with 200', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/'
    });
    expect(res.statusCode).to.equal(200);
  });
});
