'use strict';

const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const { start } = require('../lib/server');

describe('GET /api/heroes', () => {
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
      url: '/api/heroes'
    });
    expect(res.statusCode).to.equal(200);
    const payloadObj = JSON.parse(res.payload);
    expect(payloadObj.data).to.include({ id: 1, name: 'Hero 1' });
    expect(payloadObj.data).to.include({ id: 2, name: 'Hero 2' });
    expect(payloadObj.data).to.include({ id: 3, name: 'Hero 3' });
  });
});
