const express = require('express');
const router = express.Router();
const {Course} = require('../../model/course');

router.delete('/:id',async (req,res)=>{
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);

    if(!deletedCourse)
        return res.status(400).send('there is not course exist for the given ID');

    res.status(200).send(deletedCourse)
});

module.exports=router;