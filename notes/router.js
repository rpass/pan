'use strict'

let router = require('express').Router();
let notesService = require('./services.js');

// routes for api
router.get('/', function(req, res) {
  console.log('/api/notes hit: getting all notes');
  let notes = notesService.getAllNotes();
  res.json(notes);
});

router.post('/create', function(req, res) {
  console.log('/api/notes/create hit: creating note');
  notesService.createNote(req);
  res.sendStatus(200);
});

// Handle 404
router.use(function(req, res) {
  console.log('Page not found: ' + req.url);
  res.status(404);
  res.send('404: Page not Found');
});

module.exports = router;
