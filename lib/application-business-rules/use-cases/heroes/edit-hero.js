module.exports = function makeEditHero ({ heroRepository }) {
  return async function editHero (id, params) {
    return heroRepository.update(id, params);
  };
};
