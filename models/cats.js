const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: String, required: true},
    readyToAdopt: Boolean
});

const Cats = mongoose.model('Cat', catSchema)

module.exports = Cats