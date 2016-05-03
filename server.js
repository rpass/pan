var express = require('express');
var mongoose = require('mongoose');
var dbURL = require('./config.js').db.testUrl;

var app = express();
var port = 8080;
mongoose.connect(dbURL);

app.use(function(req, res, next){
  res.status(404);
  res.json({error: 'Invalid URL'});
});

app.listen(port);

console.log('Server has started on port ' + port);
module.exports = app;
