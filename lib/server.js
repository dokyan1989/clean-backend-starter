'use strict';

const Hapi = require('@hapi/hapi');
const Path = require('path');
const Joi = require('@hapi/joi');

exports.start = async (start) => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
    // routes: {
    //   validate: {
    //     failAction: (request, h, err) => {
    //       console.log(err);
    //       throw err;
    //     }
    //   }
    // }
  });

  await server.register(require('@hapi/vision'));
  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: Path.join(__dirname, '/..'),
    path: 'templates'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
      return 'hello world';
    },
    options: {
      validate: {
        query: Joi.object({
          limit: Joi.number().integer().min(1).message('abcdef').max(100).message('123456').default(10)
        }).options({ stripUnknown: true }),
        failAction: async function (request, h, err) {
          console.log(err.details);
          throw err;
        }
      }
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
