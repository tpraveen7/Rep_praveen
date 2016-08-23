var express = require('express');
var app = express();
var fakearray = require('./model/fakearray.js');
var PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  console.log('middleware doing stuff');
  next();
})

app.use(function(req, res, next){
  console.log('second middleware doing stuff');
  next();
})


app.use(function(req, res, next){
  console.log('Third middleware doing stuff');
  next();
})

console.log(fakearray);
app.get('/', function(request, response){
  response.render('index.ejs', {
    dataArray:fakearray
  });
});



app.get('/foo',function(req, res){
  res.send('works');
})

app.listen(PORT, function(){
console.log('Example app Listening on Port 3000:');

});
