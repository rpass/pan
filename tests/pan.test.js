'use strict'

let chai = require('chai');
let should = chai.should();
let Note = require('/Users/rob/dev/Pan/notes/note.js');

describe('Pan', function () {
  it('should successfuly print', function () {
    let myNote = new Note({
      title: 'A story about a boy',
      content: 'There was once a lad named Ash, fin'
    });

    let actualOutcome = myNote.toString();
    let expectedOutcome = 'A story about a boy: \nThere was once a lad named Ash, fin\n -- Rob Passmore';

    actualOutcome.should.equal(expectedOutcome);
  });
});
