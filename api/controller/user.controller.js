const express = require('express');
const router = express.Router();
const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secretKey = 'afasfuqhwncoiyurwnkiAD';

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Registration failed.' });
  }
});

//LOGIN
router.post('/login', async (req,res) => {
  try{
      const user = await User.findOne({email: req.body.email})

      !user && res.status(400).json('Wrong credentials!');
      const validated = bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials");

      //take other data without password
      const { password, ...others } = user._doc;
      res.status(200).json(others);
  }
  catch(err){
      res.status(500).json(err)
  }
})

router.get('/:id', async (req,res) => {
  try{
    const response = await User.findById(req.params.id)
    res.status(200).json(response)
  }
  catch(err){
    res.status(400).json(err)
  }
})

module.exports = router;
