var express = require('express');
var app = express();


app.get('/', function(request, response){
  response.send( 'oh hello hai');

});

app.listen(3000,function(){
console.log('Example app Listening on Port 3000:');

});
