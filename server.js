var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;


app.use(express.static('public'));


var runController = require('./controllers/runs.js');
app.use('/runs', runController);

var userController = require('./controllers/users.js');
app.use('/users', userController);


app.get('/', function(request, response){
  response.render('index.ejs', {

  });
});



app.listen(PORT, function(){
console.log('Example app Listening on Port 3000:');

});
