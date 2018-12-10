const express = require('express');
const router = express.Router();
const {Post} = require('./../../model/pots');

router.put('/like/:id',async (req,res)=>{
   const postWithLike =await Post.findByIdAndUpdate(
       req.params.id,
       {$inc : {like : +1 }},
       {new :true}
   );

   if(!postWithLike) return res.status(404).send('there is no post for given id');

    res.status(200).send(postWithLike)
});

module.exports = router;