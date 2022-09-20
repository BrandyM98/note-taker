const router = require('express').Router();
const {createNewNote, updateDb} = require('../../lib/notes');
const { v4: uuidv4 } = require('uuid');
//const {notes} = require('../../db/db.json');
let notes = require("../../db/db.json")
const fs = require("fs")

//GET
router.get('/notes', (req, res) => {
    //let results = notes;
    //let results = JSON.parse(fs.readFileSync("./db/db.json")) || []
    //console.log('/api/notes fired!')
    res.json(notes);
  });

//POST
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    console.log("notes = ", notes);
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  });  

//DELETE
router.delete('/notes/:id' , (req, res) => {
    const params = req.params.id
    updateDb(params, notes);
    res.redirect('');
  });

module.exports = router;