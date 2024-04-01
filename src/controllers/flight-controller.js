const { StatusCodes } = require("http-status-codes")
const { flightService } = require("../services")
const { successResponse, errorResponse } = require("../utils/common")

async function createFlight(req,res){
    try{
        console.log(req.body,"comtroller")
        const flight = await flightService.createFlight({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            totalSeats:req.body.totalSeats
        })
        successResponse.data = flight
        return res.status(StatusCodes.CREATED).json(successResponse)
    }
    catch(err){
        errorResponse.error = err
        res.status(err.statusCode)
        .json(errorResponse)
    }
}

async function getAllFlights(req,res){
    try{
        console.log("IN contoll")
        const flights  = await flightService.getAllFlights(req.query);
        successResponse.data = flights
        return res.status(StatusCodes.OK).json(successResponse)
    }
    catch(err){
        errorResponse.error = err
        res.status(err.statusCode)
        .json(errorResponse)
    }
}

async function getFlight(req,res){
    try{
        console.log("in control",req.params.id)
        const flight = await flightService.getFlight(req.params.id)
        successResponse.data = flight
        return res.status(StatusCodes.OK).json(successResponse)
        
        

    }catch(error){
        errorResponse.error = error
        res.status(error.statusCode)
        .json(errorResponse)
    }
}
async function updateSeats(req,res){
    try{
        console.log(req.params)
        const response =  await flightService.updateFlightSeats({
            flightId:req.params.id,
            seats:req.body.seats,
           dec:req.body.dec
        })
        successResponse.data = flight
        return response.status(StatusCodes.OK).json(successResponse)
        
    }
    catch(error){
        errorResponse.error = error
        res.status(error.statusCode)
        .json(errorResponse)
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}