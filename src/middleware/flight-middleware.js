const { StatusCodes } = require("http-status-codes");

function validateCreateRequest (req,res,next){
 

        if(!req.body.flightNumber){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"Something went wrong while creating airplane",
                data:{},
                error:{explanation:"flightNumber Number not found in the oncoming request"}
            })
        }
        if(!req.body.airplaneId){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"Something went wrong while creating airplane",
                data:{},
                error:{explanation:"airplaneId Number not found in the oncoming request"}
            })
        }
        if(!req.body.departureAirportId){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"Something went wrong while creating airplane",
                data:{},
                error:{explanation:"departureAirportId Number not found in the oncoming request"}
            })
        }
        if(!req.body.arrivalAirportId){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"Something went wrong while creating airplane",
                data:{},
                error:{explanation:"arrivalAirportId Number not found in the oncoming request"}
            })
        }
        if(!req.body.arrivalTime){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"Something went wrong while creating airplane",
                data:{},
                error:{explanation:"arrivalTime Number not found in the oncoming request"}
            })
        }
        if(!req.body.departureTime){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"Something went wrong while creating airplane",
                data:{},
                error:{explanation:"departureTime Number not found in the oncoming request"}
            })
        }
        if(!req.body.price){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"Something went wrong while creating flight",
                data:{},
                error:{explanation:"price Number not found in the oncoming request"}
            })
        }
        if(!req.body.totalSeats){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"Something went wrong while creating airplane",
                data:{},
                error:{explanation:"totalSeats Number not found in the oncoming request"}
            })
        }
    next();

    
}

module.exports = {
    validateCreateRequest
}