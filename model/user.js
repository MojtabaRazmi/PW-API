const {mongoose} =require('./../db/connection');

let UserSchema = new mongoose.Schema({
    Email : {
        type : Email,
        require : true,
        trim : true,
        unique : true,
    },
    password:{
        type: String,
        require : true,
        minLength : 6

    }
});

let User = mongoose.model('User',UserSchema);

module.exports={
    User
};