var express = require('express');
var controller = express.Router();
var Run = require('../model/runs.js');



controller.get('/', function (req, res){
  Run.findAll({}).then(function(foundRuns){
    res.json(foundRuns);
  });
});



controller.get('/:id', function(req, res){
Run.findById(req.params.id).then(function(foundRuns){
  res.json(foundRuns);
});

});



controller.post('/', function(req, res){
  Run.create(req.body). then(function(createdRun){
    res.json(createdRun);
  });
});


controller.put('/:id', function(req, res){
  runs[req.params.id] = req.body;
  res.json(runs);
});

controller.delete('/:id', function(req, res){
  Run.destroy({
    where:{
      id: req.params.id
    }
  }).then(function(didSucceed){
    res.json(didSucceed);
  });

});





controller.delete('/:id', function(req, res){
  runs.splice(req.params.id, 1);
  res.json(runs);
});





module.exports = controller;
