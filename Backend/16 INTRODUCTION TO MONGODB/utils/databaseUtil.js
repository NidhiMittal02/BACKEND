const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://Nidhi:Knmietm4@nidhi.pezijk3.mongodb.net/?retryWrites=true&w=majority&appName=Nidhi";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
  .then(client => {
    callback();
    _db = client.db('airbnb');
  }).catch(err => {
    console.log('Error while connecting to Mongo: ', err);
  });
}

const getDB = () => {
  if (!_db) {
    throw new Error('Mongo not connected');
  }
  return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;