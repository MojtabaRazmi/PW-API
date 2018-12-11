const {mongoose} =require('./../db/connection');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

let UserSchema = new mongoose.Schema({
    name:{
      type:String,
      trim: true,
      minLength: 5,
      maxlength:255
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        minLength: 5,
        maxlength:255
    },
    password:{
        type: String,
        required : true,
        minLength : 6,
        maxlength:1024

    }
});

UserSchema.methods.genAuthToken = function(){
  return jwt.sign({_id:this._id},config.get('jwt_secret'));
};

let User = mongoose.model('User',UserSchema);

const validate = user => {
    const schema = {
        name: joi.string()
            .min(5)
            .max(255),

        email: joi.string()
            .min(5)
            .max(255)
            .required()
            .email(),
        password: joi.string()
            .min(6)
            .max(255)
            .required()
    };

    return joi.validate(user, schema);
};


module.exports={
    User,
    validate
};