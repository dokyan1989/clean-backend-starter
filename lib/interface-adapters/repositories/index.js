const makeDb = require('../../frameworks-drivers/database/db');

const makeHeroRepository = require('./hero-repository');

module.exports = {
  heroRepository: makeHeroRepository({ heroesDb: makeDb('test_heroes') })
};
