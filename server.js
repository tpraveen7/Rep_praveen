var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(bodyParser.json());

app.use(bodyParser.json());


var runController = require('./controllers/runs.js');
app.use('/runs', runController);

var runController = require('./controllers/users.js');
app.use('/users', runController);


app.get('/', function(request, response){
  response.render('index.ejs', {

  });
});



app.listen(PORT, function(){
console.log('Example app Listening on Port 3000:');

});
