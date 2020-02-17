const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = function makeDb (dbName) {
  return async function db () {
    if (!client.isConnected()) {
      await client.connect();
    }
    return client.db(dbName);
  };
};
