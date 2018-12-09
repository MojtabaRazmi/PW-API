const express = require('express');
const router = express.Router();
const {Course} = require('./../../model/course');

router.get('/', async (req, res) => {
    const findCourses = await Course.find();

    if (!findCourses) return res.status(400).send('There is not courses in data base');

    res.status(200).send(findCourses)
});

module.exports =router;