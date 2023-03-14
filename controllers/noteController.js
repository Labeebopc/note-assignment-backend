const mongoose = require("mongoose");
const { noteSchema } = require('../models/noteModel.js')


const Notes = mongoose.model("Notes", noteSchema)

/************************ Create a Note *****************************/
//export 
const createNote = async (req, res) => {
    const { title, body } = req.body;
    // let user = req.user
    try {
        const note = await Notes.create({ title: title, body: body })
        res.status(201).json({ success: true, note, message: "Note Successfuly Created" })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }


}


/************************ Get all Notes *****************************/
//export 
const getNotes = async (req, res) => {

    try {
        const notes = await Notes.find()
        res.status(201).json({ success: true, notes, message: "Notes are Successfuly Fetched" })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }


}

/************************ Get Note with ID *****************************/
const getNoteWithID = async (req, res) => {
    const noteId = req.params.id;
    let note;

    try {
        note = await Notes.find({ _id: noteId })

    } catch (error) {
        return res.status(400).json({ success: false })

    }
    if (!note) {
        return res.status(404).json({ success: false, message: "Note Not Found" })
    }

    return res.status(200).json({ success: true, note })

}


/************************ Update Note with ID *****************************/
const updateNoteWithID = async (req, res) => {
    const noteId = req.params.id;
    let note;

    try {
        note = await Notes.updateOne({ _id: noteId }, req.body)
        note = await Notes.findOne({ _id: noteId })

    } catch (error) {
        return res.status(400).json({ success: false })

    }

    return res.status(200).json({ success: true, note, message: "Note Updated Successfully" })

}

/************************ Delete Note with ID *****************************/
const deleteNoteWithID = async (req, res) => {
    const noteId = req.params.id;
    let note;

    try {
        note = await Notes.deleteOne({ _id: noteId })

    } catch (error) {
        return res.status(400).json({ success: false })

    }

    return res.status(200).json({ success: true, message: "Note Deleted Successfully" })

}

module.exports = { createNote, getNotes, getNoteWithID, updateNoteWithID, deleteNoteWithID }