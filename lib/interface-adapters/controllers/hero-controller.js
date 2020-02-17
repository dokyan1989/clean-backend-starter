
const Boom = require('@hapi/boom');

const { heroRepository } = require('../repositories');
const addHero = require('../../application-business-rules/use-cases/heroes/add-hero')({ heroRepository });
const editHero = require('../../application-business-rules/use-cases/heroes/edit-hero')({ heroRepository });
const listHeroes = require('../../application-business-rules/use-cases/heroes/list-heroes')({ heroRepository });
const removeHero = require('../../application-business-rules/use-cases/heroes/remove-hero')({ heroRepository });
const viewDetailHero = require('../../application-business-rules/use-cases/heroes/view-hero-detail')({ heroRepository });

module.exports = {
  getHeroes,
  getHero,
  postHero,
  updateHero,
  deleteHero
};

async function getHeroes (request, h) {
  const heroes = await listHeroes();

  return h.response({
    data: { heroes }
  });
}

async function getHero (request, h) {
  const hero = await viewDetailHero(request.params.heroId);

  return h.response({
    data: { hero }
  });
}

async function postHero (request, h) {
  await addHero({
    name: request.payload.name
  });

  return h.response({
    message: 'Created successfully'
  }).code(201);
}

async function updateHero (request, h) {
  const updated = await editHero(request.params.heroId, request.payload);
  if (updated) {
    return h.response({
      message: 'Updated successfully'
    });
  } else {
    throw Boom.badRequest('Can\'t find hero to update');
  }
}

async function deleteHero (request, h) {
  const deleted = await removeHero(request.params.heroId);
  if (deleted) {
    return h.response({
      message: 'Deleted successfully'
    });
  } else {
    throw Boom.badRequest('Can\'t find hero to delete');
  }
}
