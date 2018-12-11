const express = require('express');
const router = express.Router();
// const auth = require('./../../middleware/auth');
const {User,validate} = require('./../../model/user');
const bcrypt = require('bcrypt');

router.post('/' ,async (req,res)=>{

    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const userFound =await User.findOne({email : req.body.email});
    if(!userFound) return res.status(400).send('Invalid email or password');

    const validPass = bcrypt.compare(req.body.password,userFound.password);
    if(!validPass) return res.status(400).send('Invalid email or password');

    const token = userFound.genAuthToken();

    res.status(200).send(token);

});

module.exports = router;