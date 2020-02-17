const cuid = require('cuid');

module.exports = function makeHeroRepository ({ heroesDb }) {
  return Object.freeze({
    findAll,
    findById,
    insert,
    update,
    remove
  });

  async function findAll () {
    const db = await heroesDb();
    const heroes = await db.collection('heroes').find().toArray();
    return heroes;
  }

  async function findById (id) {
    const db = await heroesDb();
    const hero = await db.collection('heroes').findOne({ _id: id });
    return hero;
  }

  async function insert (heroInfo) {
    heroInfo._id = cuid();
    const db = await heroesDb();
    const result = await db.collection('heroes').insertOne(heroInfo);
    const insertedHero = result.ops[0];
    return insertedHero;
  }

  async function update (id, heroInfo) {
    const db = await heroesDb();
    const result = await db.collection('heroes').updateOne({ _id: id }, { $set: { ...heroInfo } });
    return result.modifiedCount > 0;
  }

  async function remove (id) {
    const db = await heroesDb();
    const result = await db.collection('heroes').deleteOne({ _id: id });
    return result.deletedCount > 0;
  }
};
