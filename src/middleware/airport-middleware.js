const { StatusCodes } = require("http-status-codes");

function validateCreateRequest (req,res,next){
 

        if(!req.body.name){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"Something went wrong while creating airport",
                data:{},
                error:{explanation:"Name not found in the oncoming request"}
            })
        }
        if(!req.body.code){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"Something went wrong while creating airport",
                data:{},
                error:{explanation:"Code not found in the oncoming request"}
            })
        }
        if(!req.body.cityId){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"Something went wrong while creating airport",
                data:{},
                error:{explanation:"City_id not found in the oncoming request"}
            })
        }
    next();

    
}

module.exports = {
    validateCreateRequest
}