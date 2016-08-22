var express = require('express');
var app = express();
var fakearray = require('./models/fakearray.js');

console.log(fakearray);
app.get('/', function(request, response){
  response.render('index.ejs');
});

app.listen(3000,function(){
console.log('Example app Listening on Port 3000:');

});
