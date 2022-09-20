const router = require('express').Router();
const {createNewNote, updateDb} = require('../../lib/notes');
const { v4: uuidv4 } = require('uuid');
const {notes} = require('../../db/db.json');