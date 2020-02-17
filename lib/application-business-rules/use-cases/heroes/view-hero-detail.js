module.exports = function makeViewHeroDetail ({ heroRepository }) {
  return async function viewHeroDetail (id) {
    return heroRepository.findById(id);
  };
};
