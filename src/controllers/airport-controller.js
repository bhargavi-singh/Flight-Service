const { StatusCodes } = require("http-status-codes")
const { AirportService } = require("../services")
const { successResponse, errorResponse } = require("../utils/common")

async function createAirport(req,res){
    try{
        console.log(req.body,"comtroller")
        const airport = await AirportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId
        })
        successResponse.data = airport
        return res.status(StatusCodes.CREATED).json(successResponse)
    }
    catch(err){
        errorResponse.error = err
        res.status(err.statusCode)
        .json(errorResponse)
    }
}
async function getAirports(req,res){
    try{
        
        const airports = await AirportService.getAirports()
        successResponse.data = airports
        return res.status(StatusCodes.OK).json(successResponse)
        
        

    }catch(error){
        errorResponse.error = error
        res.status(error.statusCode)
        .json(errorResponse)
    }
}

async function getAirport(req,res){
    try{
        const airports = await AirportService.getAirport(req.params.id)
        successResponse.data = airports
        return res.status(StatusCodes.OK).json(successResponse)
        
        

    }catch(error){
        errorResponse.error = error
        res.status(error.statusCode)
        .json(errorResponse)
    }
}
async function destroyAirport(req,res){
    try{
        const airports = await AirportService.destroyAirport(req.params.id)
        successResponse.data = airports
        return res.status(StatusCodes.OK).json(successResponse)
        
        

    }catch(error){
        errorResponse.error = error
        res.status(error.statusCode)
        .json(errorResponse)
    }
}
module.exports = {
    createAirport,getAirports,getAirport,destroyAirport
}