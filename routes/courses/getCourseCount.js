const express = require('express');
const router = express.Router();
const {Course} = require('../../model/course');

router.get('/count', async (req,res)=>{
    const countDocument = await Course.countDocuments();

    if(!countDocument) return res.status(400).send('there is no post in data base');

    res.status(200).send({count : countDocument})
});

module.exports = router;