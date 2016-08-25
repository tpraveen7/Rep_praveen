var Sequelize = require('sequelize');
var Runs = require('./runs.js');
var db = require('../model/db_connection.js');

var User = db.define('user',{
  name: { unique: true,
         type: Sequelize.STRING
  },
  password:Sequelize.STRING,
});

User.hasMany(Runs, { as: 'Runs'});

db.sync();


module.exports = User;
