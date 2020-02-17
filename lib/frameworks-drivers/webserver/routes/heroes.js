
const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const heroController = require('../../../interface-adapters/controllers/hero-controller');

module.exports = {
  name: 'heroes',
  register: async function (server, options) {
    server.route({
      method: 'GET',
      path: '/heroes',
      handler: heroController.getHeroes
    });

    server.route({
      method: 'GET',
      path: '/heroes/{heroId}',
      handler: heroController.getHero
    });

    server.route({
      method: 'POST',
      path: '/heroes',
      handler: heroController.postHero,
      options: {
        validate: {
          payload: Joi.object({
            name: Joi.string().required()
          }),
          failAction: async function (request, h, err) {
            return Boom.badRequest(err.message);
          }
        }
      }
    });

    server.route({
      method: 'PUT',
      path: '/heroes/{heroId}',
      handler: heroController.updateHero,
      options: {
        validate: {
          payload: Joi.object({
            name: Joi.string().required()
          }),
          failAction: async function (request, h, err) {
            return Boom.badRequest(err.message);
          }
        }
      }
    });

    server.route({
      method: 'DELETE',
      path: '/heroes/{heroId}',
      handler: heroController.deleteHero
    });
  }
};
