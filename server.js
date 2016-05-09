'use strict'

// require external modules
let express = require('express');
let mongoose = require('mongoose');
let logger = require('./logger.js');

// require config files
let dbURL = require('./config.js').db.testUrl;

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
