var express = require('express');
var controller = express.Router();
var runs = require('../model/runs.js');



controller.get('/', function (req, res){
  res.json(runs);
});


controller.get('/:id', function(req, res){
  res.json(runs[req.params.id]);
});

controller.post('/', function(req, res){
  runs.push(req.body);
  res.json(runs);
});

controller.put('/:id', function(req, res){
  runs[req.params.id] = req.body;
  res.json(runs);
});


controller.delete('/:id', function(req, res){
  runs.splice(req.params.id, 1);
  res.json(runs);
});





module.exports = controller;
