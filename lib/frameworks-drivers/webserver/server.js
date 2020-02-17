'use strict';

const Glue = require('@hapi/glue');
const manifest = require('../config/manifest');

exports.start = async (start) => {
  const server = await Glue.compose(manifest, {
    relativeTo: __dirname
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
      return 'Hello World!';
    }
  });

  await server.initialize();

  if (start) {
    await server.start();
    console.log('Server running on %s', server.info.uri);

    process.on('unhandledRejection', (err) => {
      console.log(err);
      process.exit(1);
    });
  }

  return server;
};
