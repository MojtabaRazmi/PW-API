const express = require('express');
const router = express.Router();
const {Courses} = require('./../../model/course');

router.get('/', async (req, res) => {
    const findCourses = await Courses.find();

    if (!findCourses) return res.status(400).send('There is not courses in data base');

    res.status(200).send(findCourses)
});

module.exports =router;