// Services
function getAllNotes() {
  return {
    'firstNote': 'Once upon the first note'
  }
}

function createNote(note) {
  console.log('Creating note: ' + note);
  return true;
}

module.exports = {
  getAllNotes: getAllNotes,
  createNote: createNote
};
