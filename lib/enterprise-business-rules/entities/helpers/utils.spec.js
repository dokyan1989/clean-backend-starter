const expect = require('chai').expect;
const utils = require('./utils');

describe('utils', function () {
  describe('utils.isUTCTimeMilliseconds', function () {
    it('must return true if input value is valid datetime in milliseconds', function (done) {
      // arrange
      const d = Date.now();

      // act
      const result = utils.isUTCTimeMilliseconds(d);

      // assert
      expect(result).to.be.true;

      done();
    });

    it('must return false if input value is not valid date time in milliseconds', function (done) {
      // arrange
      const d = 'invalid datetime';

      // act
      const result = utils.isUTCTimeMilliseconds(d);

      // assert
      expect(result).to.be.false;

      done();
    });
  });
});
