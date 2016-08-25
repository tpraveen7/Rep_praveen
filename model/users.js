var Sequelize = require('sequelize');
var db = require('../model/db_connection.js');

var User = db.define('user',{
  name: { unique: true,
         type: Sequelize.STRING
  },
  password:Sequelize.STRING,
});
db.sync();

module.exports = User;
