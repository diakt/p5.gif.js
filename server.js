var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.use(function(req, res, next) {
  // FIXME -- hack cors for different ports requesting
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next();
});

app.use(express.static(path.join(__dirname, '.')));
app.use(express.static(path.join(__dirname, './static')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './'));
});

var server = app.listen(3001, function(){
  console.log('Server listening on port 3001');
});
