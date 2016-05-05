'use strict'

let express = require('express');
let mongoose = require('mongoose');
let dbURL = require('./config.js').db.testUrl;
let notesRouter = require('./notes/router.js');

let app = express();
let port = 8080;

app.use('/api/notes', notesRouter)

app.listen(port, function() {
  console.log('Server has started on port ' + port);
});

module.exports = app;
