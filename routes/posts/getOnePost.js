const express = require('express');
const router = express.Router()
const {Post} = require('../../model/pots');

router.get('/:id', async (req,res)=>{
   let editedPost = await Post.findById(req.params.id);

   if(!editedPost) return res.status(404).send('there is no exist any post for given id');

   res.status(200).send(editedPost);
});

module.exports = router;