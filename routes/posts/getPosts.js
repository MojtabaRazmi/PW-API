const express = require('express');
const router = express.Router();
const {Post} = require('./../../model/pots');

router.get('/', async (req,res)=>{
    const foundedPost =await Post.find();
    if (!foundedPost) return res.status(400).send('there is not post in data base');

    res.status(200).send(foundedPost);

});


module.exports =router;