'use strict';
var mongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var assert = require('assert');
var CricketStatsStore = {};

var user = encodeURIComponent('aaquib71');
var password = encodeURIComponent('Mongo@me14');

var url = format('mongodb://%s:%s@cluster0-shard-00-00-jcnr8.mongodb.net:27017/cricket_stats?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', user, password);

mongoClient.connect(url, function(err, database) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  var db = database.db('cricket_stats');
  insertDocuments(db);

  database.close();
});

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('batsman_store');
  // Insert some documents
  collection.insertMany([
    {
      "name":"Shikhar Dhawan",
      "format":"ODI",
      "matches":102,
      "runs":4361,
      "average":45.90,
      "hundreds":13,
      "fifties":25
    },
    {
      "name":"Ajinkya Rahane",
      "format":"ODI",
      "matches":90,
      "runs":2962,
      "average":35.26,
      "hundreds":3,
      "fifties":24
    }
  ], function(err, result) {
    if(err) {
      console.log(err);
    }else{
      console.log(result);
    }
    console.log("Inserted 3 documents into the collection");
  });
};


module.exports = CricketStatsStore;
