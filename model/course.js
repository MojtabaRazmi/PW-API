const {mongoose} = require('./../db/connection');
const Joi = require('joi');

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
        courseTitle: Joi.string().required(),
        courseImageUrl: Joi.string(),
        courseTime: Joi.string().required(),
        coursePrice: Joi.number().required()
    };

    return Joi.validate(course, schema)
};

const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Course, validate
};