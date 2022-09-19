const router = require('express').Router();
const {newNote, newDb} = require('../../db/notes');
const { v4: uuidv4 } = require('uuid');
const {notes} = require('../../db/db.json');

// GET 
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });

  //POST
  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = newNote(req.body, notes);
    res.json(newNote);
  });  
  
// add a delte function


  module.exports = router;