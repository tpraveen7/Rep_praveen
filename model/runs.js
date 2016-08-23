var Sequelize = require('sequelize');
var db = require('../model/db_connection.js');

var Run = db.define('run',{
  date:Sequelize.DATE,
  distance:Sequelize.FLOAT,
});
db.sync();

module.exports = Run;
