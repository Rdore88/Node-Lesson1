const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'css')))

app.get('/home', function(req, res){
  res.sendFile('index.html' , { root : __dirname});
});

app.get('/hello', function(req, res){
  res.sendFile('hello.html', { root : __dirname});
});

app.listen(3000, function (){
  console.log("Started this application");
});
