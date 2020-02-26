
const buildMakeHero = require('./hero');
const idGenerator = require('../../../helpers/id-generator');
const utils = require('../helpers/utils');

const makeHero = buildMakeHero({ idGenerator, utils });
module.exports = makeHero;
