
const buildMakeHero = require('./hero');
const idGenerator = require('../../../helpers/id-generator');

const makeHero = buildMakeHero({ idGenerator });
module.exports = makeHero;
