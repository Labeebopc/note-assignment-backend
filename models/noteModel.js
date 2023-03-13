const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: { type: String, required: [true, "Please Enter a Title"] },
    body: { type: String, required: [true, "Please Enter a Body"] },
})

module.exports = { noteSchema }