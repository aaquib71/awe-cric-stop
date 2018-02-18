'use strict';

var CricketStatsController = {};

var StatsStore = require('cric-store');

CricketStatsController.getCaptain = function (req, res) {
  var query = req.query;
  var countryName = query.countryName;
  return Promise.resolve().
    then(function () {
      return StatsStore.getCaptain(countryName);
    })
    .catch(function (error) {
      console.log('StatsStore is unable to find results for your query!');
    })
};

CricketStatsController.getBatsmansRecord = function (req, res) {
  var query = req.query;
  var playerName = query.playerName;
  var format = query.format;
  return Promise.resolve().
  then(function () {
    return StatsStore.getBatsmansRecord(playerName, format);
  })
    .catch(function (error) {
      console.log('StatsStore is unable to find results for your query!');
    })
};

CricketStatsController.getBowlersRecord = function (req, res) {
  var query = req.query;
  var playerName = query.playerName;
  var format = query.format;
  return Promise.resolve().
  then(function () {
    return StatsStore.getBowlersRecord(playerName, format);
  })
    .catch(function (error) {
      console.log('StatsStore is unable to find results for your query!');
    })
};

module.exports = CricketStatsController;