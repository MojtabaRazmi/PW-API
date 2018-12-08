const {mongoose} = require('./../db/connection');
const joi = require('joi');

const CourseSchema = new mongoose.Schema({
    courseTitle: {
        required: true,
        type: String,
        trim: true
    },
    courseTime: {
        required: true,
        type: String,
        trim: true
    },
    coursePrice: {
        required: true,
        type: Number,
        trim: true
    },
    courseImageUrl: {
        required: false,
        type: String,
        trim: true
    }

});

const validate = course => {
    const schema = {
        courseTitle: joi.string().required(),
        courseImageUrl: joi.string(),
        courseTime: joi.string().required(),
        coursePrice: joi.number().required()
    };

    return joi.validate(course, schema)
};

const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Course, validate
};