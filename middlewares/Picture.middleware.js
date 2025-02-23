const f=(req,res,next)=>{
    console.log("middleware");
    next();
}
export default f;