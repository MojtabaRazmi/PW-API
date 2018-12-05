const express =require('express');
const router = express.Router();
const {Post,validate}= require('./../model/pots');

router.post('/',async (req,res)=>{
    const {e} = validate(req.body);

    if(e){
        return res.status(400).send(`validation get some error ${e}`)
    }
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