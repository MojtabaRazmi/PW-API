const express =require('express');
const router = express.Router();
const {Course,validate}= require('../../model/course');

router.post('/',async (req,res)=>{
    const {error} = validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    let course = new Course({
        courseTitle:req.body.courseTitle,
        courseTime:req.body.courseTime,
        coursePrice:req.body.coursePrice,
        courseImageUrl : req.body.courseImageUrl,
    });

    course =await course.save();

    res.status(200).send(course)
});

module.exports =router;