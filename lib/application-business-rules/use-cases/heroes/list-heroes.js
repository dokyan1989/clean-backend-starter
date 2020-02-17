module.exports = function makeListHeroes ({ heroRepository }) {
  return async function listHeroes () {
    const heroes = await heroRepository.findAll();
    return heroes;
  };
};
