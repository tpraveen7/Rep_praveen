var express = require('express');
var session = require('express-session');
var app = express();
var PORT = process.env.PORT || 3000;


app.use(session({
  secret: "asdfsdfasf",
  resave: false,
  saveUninitialized: false
}));


app.use(express.static('public'));


var runController = require('./controllers/runs.js');
app.use('/runs', runController);

var userController = require('./controllers/users.js');
app.use('/users', userController);

var sessionController = require('./controllers/sessions.js');
app.use('/sessions', sessionController);

app.get('/', function(req, res){
  console.log(req.session.currentUser);
  res.render('index.ejs');
  });


app.listen(PORT, function(){
console.log('Example app Listening on Port 3000:');
});
