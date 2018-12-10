const {mongoose} = require('./../db/connection');
const Joi =require('joi');
const persianDate = require('persian-date');

persianDate.toLocale('fa');

const PostSchema = new mongoose.Schema({
    postTitle :{
        required:true,
        type :String,
        trim:true,
    },
    postDate : {
        required: false,
        type: String,
        trim:true,
        default: new persianDate().format('YYYY/MM/DD')
    },
    postImageUrl : {
        required: false,
        type: String,
        trim:true,
    },
    postContent : {
        required: true,
        type: String,
        trim:true,
    },
    postTags : [
            String
        ],
    like : {
        type: Number,
        default :0,
    }
});

let Post = mongoose.model('Post',PostSchema);

const validate =(entryPost)=>{
    const schema = {
        postTitle : Joi.string().required(),
        postDate: Joi.string(),
        postImageUrl: Joi.string(),
        postContent : Joi.string().required(),
        postTags: Joi.array(),
        like: Joi.number(),

    };

    return Joi.validate(entryPost,schema)
};


module.exports={
  Post,validate
};