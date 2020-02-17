module.exports = function makeAddHero ({ heroRepository }) {
  return async function addHero (data) {
    return heroRepository.insert(data);
  };
};
