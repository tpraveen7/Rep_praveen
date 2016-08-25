var express = require('express');
var controller = express.Router();

controller.get('/', function(req, res){
res.send('Users Index');

});

module.exports = controller;
