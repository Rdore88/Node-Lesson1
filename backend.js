const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum')
var lorem = loremIpsum({count: 3});

app.use(express.static('public'));

app.get('/home', function(req, res){
  res.sendFile('index.html' , { root : __dirname});
});

app.get('/hello', function(req, res){
  res.sendFile('hello.html', { root : __dirname});
});

app.listen(3000, function (){
  console.log("Started this application");
});
