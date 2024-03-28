const { StatusCodes } = require("http-status-codes")
const { AirplaneService } = require("../services")
const { successResponse, errorResponse } = require("../utils/common")

async function createAirplane(req,res){
    try{
        console.log(req.body,"comtroller")
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        successResponse.data = airplane
        return res.status(StatusCodes.CREATED).json(successResponse)
    }
    catch(err){
        errorResponse.error = err
        res.status(err.statusCode)
        .json(errorResponse)
    }
}
async function getAirplanes(req,res){
    try{
        const airplanes = await AirplaneService.getAirplanes()
        successResponse.data = airplanes
        return res.status(StatusCodes.OK).json(successResponse)
        
        

    }catch(error){
        errorResponse.error = error
        res.status(error.statusCode)
        .json(errorResponse)
    }
}
module.exports = {
    createAirplane,getAirplanes
}