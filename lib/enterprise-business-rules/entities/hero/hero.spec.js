
const expect = require('chai').expect;
const makeHero = require('./');
const makeFakeHero = require('../../../../__test__/fixtures/hero');

describe('hero', function () {
  it('can have an id', function (done) {
    const hero = makeFakeHero({ id: 'invalid' });
    expect(() => makeHero(hero)).to.throw('Hero must have a valid id.');
    const noIdHero = makeFakeHero({ id: undefined });
    expect(() => makeHero(noIdHero)).to.not.throw();
    done();
  });

  it('must have a name', function (done) {
    const hero = makeFakeHero({ name: null });
    expect(() => makeHero(hero)).to.throw('Hero must have a name.');
    done();
  });

  it('should return valid hero entity with valid input', function (done) {
    const fakeHero = makeFakeHero();
    const { getId, getName } = makeHero(fakeHero);
    expect(getId()).to.equal(fakeHero.id);
    expect(getName()).to.equal(fakeHero.name);
    done();
  });
});
