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


module.exports = {
    createFlight
}