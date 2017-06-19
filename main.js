const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/home', function(req, res){
  res.sendFile('index.html' , { root : __dirname});
});

app.get('/hello/:name', function(req, res){
  res.send("Hello, there " + req.params.name + "!");
});

app.listen(3000, function (){
  console.log("Started this application");
});
