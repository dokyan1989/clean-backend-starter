module.exports = function buildMakeHero ({ idGenerator, utils }) {
  return function makeHero ({
    id = idGenerator.makeId(),
    name,
    level = 0,
    description = '',
    attribute,
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

    if (!['strength', 'agility', 'intelligence'].includes(attribute)) {
      throw new Error('Hero must have attribute that is one of the following: strength, agility, intelligence.');
    }

    if (!utils.isUTCTimeMilliseconds(createdAt)) {
      throw new Error('Hero must have createdAt now in UTC.');
    }

    if (!utils.isUTCTimeMilliseconds(updatedAt)) {
      throw new Error('Hero must have updatedAt now in UTC.');
    }

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getLevel: () => level,
      getDescription: () => description,
      getAttribute: () => attribute,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt
    });
  };
};
