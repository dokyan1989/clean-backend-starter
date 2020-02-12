const Boom = require('@hapi/boom');
const fs = require('fs');

const HEROES = JSON.parse(fs.readFileSync(`${__dirname}/../../mock-data/heroes.json`, 'utf-8'));

exports.getHeroes = {
  name: 'getHeroes',
  register: async function (server, options) {
    server.route({
      method: 'GET',
      path: '/heroes',
      handler: function (request, h) {
        return h.response({
          data: HEROES
        });
      }
    });
  }
};

exports.addHero = {
  name: 'addHero',
  register: async function (server, options) {
    server.route({
      method: 'POST',
      path: '/heroes',
      handler: function (request, h) {
        HEROES.push({
          id: HEROES.length + 1,
          name: request.payload.name
        });

        return h.response({
          message: 'Created successfully'
        }).code(201);
      }
    });
  }
};

exports.updateHero = {
  name: 'updateHero',
  register: async function (server, options) {
    server.route({
      method: 'PUT',
      path: '/heroes/{heroId}',
      handler: function (request, h) {
        const indexToUpdate = HEROES.findIndex(hero => hero.id === +request.params.heroId);
        if (indexToUpdate > -1) {
          HEROES[indexToUpdate].name = request.payload.name;

          return h.response({
            message: 'Updated successfully'
          });
        } else {
          throw Boom.badRequest('Can\'t find hero to update');
        }
      }
    });
  }
};

exports.deleteHero = {
  name: 'deleteHero',
  register: async function (server, options) {
    server.route({
      method: 'DELETE',
      path: '/heroes/{heroId}',
      handler: function (request, h) {
        const indexToDelete = HEROES.findIndex(hero => hero.id === +request.params.heroId);
        if (indexToDelete > -1) {
          HEROES.splice(indexToDelete, 1);

          return h.response({
            message: 'Deleted successfully'
          });
        } else {
          throw Boom.badRequest('Can\'t find hero to delete');
        }
      }
    });
  }
};
