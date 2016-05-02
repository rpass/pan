var expect = require('chai').expect;
var Note = require('./pan.js');

describe('Pan', function() {
  var thisNote = null;

  beforeEach(function(){
    thisNote = new Note();
  });

  it('should define a Note class', function(){
    expect(thisNote instanceof Note).to.equal(true);
  });

  it('should allow for setting of the note\'s content', function(){
    thisNote.setContent('A little note');
    expect(thisNote.content).to.equal('A little note');
  });
})
