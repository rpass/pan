'use strict'

// require external modules
let express = require('express');
let mongoose = require('mongoose');
let logger = require('./logger.js');

// require config files
let dbURL = require('./config.js').db.testUrl;

// require data models
let Note = require('/Users/rob/dev/Pan/notes/note.js');

// connect to db
mongoose.connect(dbURL);
let db = mongoose.connection;
// @TODO: give the following line a proper logger.error method
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  // do your data deeds
});

// require routers
let notesRouter = require('./notes/router.js');

let app = express();
let port = 8080;

// Use the following routers
app.use('/api/notes', notesRouter);

app.listen(port, function() {
  logger.log('Server has started on port ' + port);
});

module.exports = app;
