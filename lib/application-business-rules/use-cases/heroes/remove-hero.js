module.exports = function makeRemoveHero ({ heroRepository }) {
  return async function removeHero (id) {
    return heroRepository.remove(id);
  };
};
