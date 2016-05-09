'use strict'

let logger = require('../logger.js');

// Services
function getAllNotes() {
  logger.log('Getting all notes...');
  return {
    'firstNote': 'Once upon the first note'
  }
}

function createNote(note) {
  logger.log('Creating note: ' + note);
  return true;
}

module.exports = {
  getAllNotes: getAllNotes,
  createNote: createNote
};
