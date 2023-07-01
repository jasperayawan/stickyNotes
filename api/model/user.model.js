const mongoose = require('mongoose');
const {model} = mongoose;

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'FullName is required!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    }
},{
    timestamps: true
})

const userModel = model('User', userSchema);

module.exports = userModel;