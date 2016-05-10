'use strict'

let mongoose = require('mongoose');

let noteSchema = mongoose.Schema({
  title: String,
  content: String
});

noteSchema.methods.toString = function () {
  return this.title + ': \n' + this.content + '\n -- Rob Passmore';
}

// Compile the schema into a model
let Note = mongoose.model('Note', noteSchema);

module.exports = Note;
