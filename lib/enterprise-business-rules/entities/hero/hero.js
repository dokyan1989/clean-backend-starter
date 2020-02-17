module.exports = function buildMakeHero ({ idGenerator }) {
  return function makeHero ({
    id = idGenerator.makeId(),
    name
  } = {}) {
    if (!idGenerator.isValidId(id)) {
      throw new Error('Hero must have a valid id.');
    }

    if (!name) {
      throw new Error('Hero must have a name.');
    }

    return Object.freeze({
      getId: () => id,
      getName: () => name
    });
  };
};
