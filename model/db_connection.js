var Sequelize = require('sequelize');
var DB_URL = process.env.DATABASE_URL || 'postgres://postgres@localhost:5432/runs';

var db = new Sequelize(DB_URL);


module.exports = db;
