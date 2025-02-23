import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    pictures:[{
        data:{
            type:Buffer,
            required:true
        },
        uploadDate:{
            type:Date,
            default:Date.now
        }
    }]
},{timestamps:true});

const User=mongoose.model("User",schema);
export default User;