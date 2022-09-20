const fs = require('fs');
const path = require('path');

function updateDb(id, notesArray) {
  }

  function createNewNote(body, notesArray) { 
    const newNote = body
    notesArray.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({notes: notesArray}, null, 2)
    );
    return newNote;
  };

  module.exports = {
    updateDb,
    createNewNote,
  }; 