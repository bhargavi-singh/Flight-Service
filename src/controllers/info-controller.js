
const info = (req,res)=>{
    return res.json({
        success:true,
        message:"Api is live",
        error:{},
        data:{}
    })
}

module.exports = {
     info
}