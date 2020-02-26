const faker = require('faker');
const cuid = require('cuid');

const idGenerator = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid
});

module.exports = function makeFakeHero (overrides) {
  const hero = {
    id: idGenerator.makeId(),
    name: faker.name.findName(),
    level: faker.random.number(),
    description: faker.lorem.paragraph(5),
    attribute: faker.lorem.word(),
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  return {
    ...hero,
    ...overrides
  };
};
