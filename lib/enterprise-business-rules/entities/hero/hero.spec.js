
const expect = require('chai').expect;
const makeHero = require('./');
const makeFakeHero = require('../../../../__test__/fixtures/hero');
const idGenerator = require('../../../helpers/id-generator');

describe('Hero Entity', function () {
  it('must have a valid id', function (done) {
    // arrange
    const hero = makeFakeHero({ id: 'invalid' });

    // act and assert
    expect(() => makeHero(hero)).to.throw('Hero must have a valid id.');

    done();
  });

  it('will automatically create a valid id if an id is not passed', function (done) {
    // arrange
    const noIdHero = makeFakeHero({ id: undefined });

    // act
    const createdHero = makeHero(noIdHero);

    // assert
    expect(idGenerator.isValidId(createdHero.getId())).to.be.true;

    done();
  });

  it('must have a name', function (done) {
    // arrange
    const hero = makeFakeHero({ name: null });

    // act and assert
    expect(() => makeHero(hero)).to.throw('Hero must have a name.');

    done();
  });

  it('must have a name with at least 3 characters', function (done) {
    // arrange
    const hero = makeFakeHero({ name: 'xx' });

    // act and assert
    expect(() => makeHero(hero)).to.throw('Hero name must be at least 2 characters.');

    done();
  });

  it('must have a level that is greater than or equal 0', function (done) {
    // arrange
    const hero = makeFakeHero({ level: -1 });

    // act and assert
    expect(() => makeHero(hero)).to.throw('Hero level must be greater than or equal to 0.');

    done();
  });

  it('level will be set default to 0 if one is not passed', function (done) {
    // arrange
    const noLevelHero = makeFakeHero({ level: undefined });

    // act
    const createdHero = makeHero(noLevelHero);

    // arrange
    expect(createdHero.getLevel()).to.equal(0);

    done();
  });

  it('description will be set default to empty string if one is not passed');
  it('must have attribute that is one of the following: strength, agility, intelligence');
  it('must have createdAt now in UTC', function (done) {
    // arrange
    const heroWithNoCreatedAt = makeFakeHero({ createdAt: undefined });
    const d = makeHero(heroWithNoCreatedAt).getCreatedAt();

    // act and assert
    expect(heroWithNoCreatedAt.createdAt).to.be.undefined;
    expect(d).to.not.be.undefined;
    expect(new Date(d).toUTCString().substring(26)).to.be.equal('GMT');

    done();
  });

  it('must have updatedAt now in UTC', function (done) {
    // arrange
    const heroWithNoUpdatedAt = makeFakeHero({ updatedAt: undefined });
    const d = makeHero(heroWithNoUpdatedAt).getUpdatedAt();

    // act and assert
    expect(heroWithNoUpdatedAt.updatedAt).to.be.undefined;
    expect(d).to.not.be.undefined;
    expect(new Date(d).toUTCString().substring(26)).to.be.equal('GMT');

    done();
  });

  it('should return a hero entity with valid input', function (done) {
    // arrange
    const fakeHero = makeFakeHero();

    // act
    const { getId, getName, getLevel } = makeHero(fakeHero);

    // assert
    expect(getId()).to.equal(fakeHero.id);
    expect(getName()).to.equal(fakeHero.name);
    expect(getLevel()).to.equal(fakeHero.level);

    done();
  });
});
