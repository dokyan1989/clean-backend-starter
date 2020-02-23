module.exports = function buildMakeHero ({ idGenerator }) {
  return function makeHero ({
    id = idGenerator.makeId(),
    name,
    level = 0,
    createdAt = Date.now(),
    updatedAt = Date.now()
  } = {}) {
    if (!idGenerator.isValidId(id)) {
      throw new Error('Hero must have a valid id.');
    }

    if (!name) {
      throw new Error('Hero must have a name.');
    }

    if (name.length < 3) {
      throw new Error('Hero name must be at least 2 characters.');
    }

    if (level < 0) {
      throw new Error('Hero level must be greater than or equal to 0.');
    }

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getLevel: () => level,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt
    });
  };
};
