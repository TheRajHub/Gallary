import {asyncHandler} from '../utils/AsyncHandle.js'
import {ApiResponce} from '../utils/APIresponce.js'
import User from '../models/User.js'

const uplodePic=asyncHandler(async(req,res)=>{
    let id=req.params.id
    let pic=req.file.buffer
    let user = await User.findById(id);
    if (!user) {
        return res.status(404).json(new ApiResponce(404, null, "User not found"));
    }

    // Push new picture object
    user.pictures.push({
        data: pic,
    });

    await user.save(); // Ensures validation runs

    res.status(200).json(new ApiResponce(200, user, "Picture Uploaded"));
})
export {uplodePic};