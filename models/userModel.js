const mongoose=require("mongoose");

const userSchema = mongoose.Schema({
    name :{
        type :String,
        required :true
    },
    email :{
        type:String,
        required:true,
        unique:true,  
        trim:true  
    
    },
    age:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    phoneNumber:{
        type:String,
        trim:true,
        required:true
    }
}
);

const User =mongoose.model('User',userSchema);

module.exports =User;