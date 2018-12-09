const express = require('express');
const router = express.Router();
const {Course,validate} = require('../../model/course');

router.put('/:id',async (req,res)=>{

    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let editedCourse = await Course.findByIdAndUpdate(
        req.params.id,
        {
            courseTitle : req.body.courseTitle,
            coursePrice : req.body.coursePrice,
            courseImageUrl : req.body.courseImageUrl,
            courseTime : req.body.courseTime
        },{
            new : true
        }
    );

    if(!editedCourse) return res.status(404).send('there is not exist any post for the given id');

    res.status(200).send(editedCourse);
});

module.exports = router;