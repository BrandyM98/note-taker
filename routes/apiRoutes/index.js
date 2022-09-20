const router = require('express').Router();
const {createNewNote, updateDb} = require('../../lib/notes');
const { v4: uuidv4 } = require('uuid');
//const {notes} = require('../../db/db.json');
let notes = require("../../db/db.json")
const fs = require("fs")

//GET
router.get('/notes', (req, res) => {
    //let results = notes;
    let results = JSON.parse(fs.readFileSync("./db/db.json")) || []
    res.json(results);
  });

//POST
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
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