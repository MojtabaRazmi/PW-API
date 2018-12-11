const express = require('express');
const router = express.Router();
// const auth = require('./../../middleware/auth');
const {User,validate} = require('./../../model/user');
const bcrypt = require('bcrypt');

router.post('/' ,async (req,res)=>{

    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let userFound = await User.findOne({email : req.body.email});
    if(userFound) return res.status(400).send('this Email already exist');

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password,salt);

  let newUser = new User({
      name : req.body.name,
      email : req.body.email,
      password : hashedPass
  });

  await newUser.save();
  res.status(200).send('the user has been added');

});

module.exports = router;