var express = require('express');
var app = express();
var fakearray = require('./model/fakearray.js');
var PORT = process.env.PORT || 3000;

console.log(fakearray);
app.get('/', function(request, response){
  response.render('index.ejs', {
    dataArray:fakearray
  });
});

app.listen(PORT, function(){
console.log('Example app Listening on Port 3000:');

});
