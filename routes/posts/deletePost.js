const express = require('express');
const router = express.Router();
const {Post} = require('../../model/pots');

router.delete('/:id',async (req,res)=>{
    const editedPost = await Post.findByIdAndDelete(req.params.id);
    if(!editedPost) return res.status(400).send('there is not post exist for the given id');
    res.status(200).send(editedPost)
});

module.exports = router;