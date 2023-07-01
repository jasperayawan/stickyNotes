const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, 'Full Name is required!'],
    },
    email: {
      type: String,
      required: [true, 'Email is required!'],
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
