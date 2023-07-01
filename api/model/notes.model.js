const mongoose = require('mongoose');

const {model} = mongoose;

const noteSchema = new mongoose.Schema({
    title: {type: String, required:[true, 'Title is required']},
    description: {type: String, required:['Description is required', true]},
},{
    timestamps: true
})

const userModel = model('Note', noteSchema);

module.exports = userModel;