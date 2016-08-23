var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());

var runController = require('./controllers/runs.js');
app.use('/runs', runController);


app.get('/', function(request, response){
  response.render('index.ejs', {

  });
});



app.listen(PORT, function(){
console.log('Example app Listening on Port 3000:');

});
