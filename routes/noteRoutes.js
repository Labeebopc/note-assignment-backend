const express = require('express');

const { createNote, getNotes, getNoteWithID, updateNoteWithID, deleteNoteWithID } = require('../controllers/noteController.js')

const router = express.Router()



//Create a Note
router.post("/", createNote)

//Get all Notes
router.get("/",getNotes)

//Get a perticular Note / Update / Delete
router.get('/:id', getNoteWithID)
router.put('/:id',updateNoteWithID)
router.delete('/:id',deleteNoteWithID)



module.exports = router;