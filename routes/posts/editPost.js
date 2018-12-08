const express = require('express');
const router = express.Router();
const {Post,validate} = require('../../model/pots');

router.put('/:id',async (req,res)=>{

    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let editedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
            postTitle : req.body.postTitle,
            postDate : req.body.postDate,
            postImageUrl : req.body.postImageUrl,
            postContent : req.body.postContent,
            postTags : req.body.postTags,
        },
        {new: true}
        );

    if(!editedPost) return res.status(404).send('there is not exist any post for the given id');

    res.status(200).send(editedPost);
});

module.exports = router;