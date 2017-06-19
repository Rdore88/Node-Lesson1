const express = require('express');
const app = express();
const path = require('path');

app.use('/css', express.static('css'));


app.get('/home', function(req, res){
  res.sendFile('index.html', { root: '.' });
});

app.get('/hello', function(req, res){
  res.sendFile('hello.html', { root: '.' });
});

app.listen(3000, function (){
  console.log("Started this application");
});
