const express =require('express');
const router = express.Router();
const {Post}= require('./../model/pots');

router.post('/',async (req,res)=>{
    let post = new Post({
        postTitle : req.body.postTitle,
        postImageUrl : req.body.postImageUrl,
        postContent : req.body.postContent,
        postTags : req.body.postTags
    });

    post = await post.save();

    res.status(200).send(post)

});

module.exports=router;