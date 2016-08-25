var express = require('express');
var bodyParser = require('body-parser');

var controller = express.Router();
var Run = require('../model/runs.js');

var User =require('../model/users.js');



controller.use(bodyParser.json());


controller.get('/', function(req, res){
User.findById(req.session.currentUser.id).then(function(foundUser){
  foundUser.getRuns().then(function(currentUserRuns){
    res.json(currentUserRuns);
  })

});
});



// controller.get('/', function (req, res){
//   Run.findAll({}).then(function(foundRuns){
//     res.json(foundRuns);
//   });
// });


controller.get('/:id', function(req, res){
Run.findById(req.params.id).then(function(foundRuns){
  res.json(foundRuns);
 });
});



controller.post('/', function(req, res){
User.findById(req.session.currentUser.id).then(function(founduser){
  Run.create(req.body).then(function(createdRun){
    foundUser.addRun(createdRun).then(function(updateRun){
      res.json(updatedRun);
    })
  
});
});
  Run.create(req.body). then(function(createdRun){
    res.json(createdRun);
  });
});


controller.put('/:id', function(req, res){
  Run.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function(didSucceed){
    res.json(disSucceed);
  });
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
