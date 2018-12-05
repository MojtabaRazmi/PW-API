let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pw_db',{useNewUrlParser:true})
    .then(()=>{
        console.log('connected to database')
    })
    .catch((err)=>{
        console.error('Error',err.message)
    });

module.exports={
    mongoose
};