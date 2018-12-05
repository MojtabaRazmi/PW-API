const {mongoose} = require('./../db/connection');

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
        required: false,
        type: Number,
        trim:true,
        default :0,
    }
});

let Post = mongoose.model('User',PostSchema);

module.exports={
  Post
};