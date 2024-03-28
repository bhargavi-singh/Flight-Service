const { StatusCodes } = require("http-status-codes");

function validateCreateRequest (req,res,next){
 

        if(!req.body.name){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"Something went wrong while creating city",
                data:{},
                error:{explanation:"City name not found in the oncoming request"}
            })
        }
    next();

    
}

module.exports = {
    validateCreateRequest
}