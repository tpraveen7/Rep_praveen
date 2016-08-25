var express = require('express');
var controller = express.Router();

controller.get('/new', function(req, res){
res.render('users/new.ejs');
});

controller.post('/', function(req, res){
res.send('Password Captured');
});

module.exports = controller;
