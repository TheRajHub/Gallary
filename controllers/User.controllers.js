import {asyncHandler} from '../utils/AsyncHandle.js'
import {ApiResponce} from '../utils/APIresponce.js'
import User from '../models/User.js'
const newUser=asyncHandler(async(req,res)=>{
    if (!req.body.name ||
        !req.body.password
    ){
        //error
    }
    let r=await new User({name:req.body.name,password:req.body.password});
    await r.save();
    res.status(200).json(new ApiResponce(200,r,"New User Created"));
})
const updateUser=asyncHandler(async(req,res)=>{
    let id=req.params.id;
    if (req.body.name || req.body.password)
    {
        let r=await User.findByIdAndUpdate(id,req.body,{ new: true });
        await r.save();
        res.status(200).json(new ApiResponce(200,r,"User Updated"));
    }
})

export {newUser,updateUser}