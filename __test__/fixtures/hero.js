const faker = require('faker');
const cuid = require('cuid');

const idGenerator = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid
});
const attributes = ['strength', 'agility', 'intelligence'];

module.exports = function makeFakeHero (overrides) {
  const hero = {
    id: idGenerator.makeId(),
    name: faker.name.findName(),
    level: faker.random.number(),
    description: faker.lorem.paragraph(5),
    attribute: attributes[faker.random.number(2)],
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  return {
    ...hero,
    ...overrides
  };
};
