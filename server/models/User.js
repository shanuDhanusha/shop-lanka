const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
         type:String,
         required:true   
    },
    userName:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true
    }
});

const User=mongoose.model("User",UserSchema);
module.exports=User;