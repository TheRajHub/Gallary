import mongoose from "mongoose";
import DB_NAME from "../constants.js";

const connection=async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB}/${DB_NAME}`);
    }
    catch(err){
        console.log("err");
        process.exit(1);
    }
}
export default connection; 