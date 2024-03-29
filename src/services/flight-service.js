const { StatusCodes } = require("http-status-codes");
const {FlightRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");
const {Op} = require('sequelize')
const flightRepository = new FlightRepository();

async function createFlight(data){
    try{
        console.log(data,"service")
        const flight = await flightRepository.create(data);
        
        return flight
    }
    catch(err){
        console.log(err)
        if(err.name == 'SequelizeValidationError'){
            let explanation=[];
            err.errors.forEach((err)=>{
                explanation.push(err.message)
            })

            console.log(explanation)
            throw new AppError("Cannot create a new flight object",StatusCodes.INTERNAL_SERVER_ERROR)
        }
        throw err;
    }
}

async function getAllFlights(query){
    let customfilter = {};
    let sortfilter = {};
    const endingTime = " 23:59:00"
    // trips="BLR-DEL"
    if(query.trips){
        console.log(query.trips,"s")
       let [departureAirportId,arrivalAirportId] = query.trips.split('-');
       
        customfilter.departureAirportId = departureAirportId;
        customfilter.arrivalAirportId = arrivalAirportId;
        
    }
    if(query.price){
      
        let [minprice,maxprice] = query.price.split('-');
       
        customfilter.price = {
            [Op.between]: [(minprice == undefined ? 0:minprice), (maxprice == undefined?20000:maxprice)]
        }; 
        
    }
    if(query.travellers){
      
        customfilter.totalSeats = {
            [Op.gte]: [query.travellers]
        }; 
        
    }
    if(query.tripDate){
      
        customfilter.departureTime = {
            [Op.between]: [query.tripDate,query.tripDate+endingTime]
        }; 
        
    }
    if(query.sort){
      
        const params = query.sort.split(',');
        const sortfilters = params.map((param)=>param.split('_'));
        sortfilter = sortfilters
        
    }
    try{
        console.log(customfilter,"custom")
        const flights = await flightRepository.getAllFlights(customfilter,sortfilter);
        return flights
    }
    catch(error){
        console.log(error)
        throw new AppError("Cannot fetch data of all the fights",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}



module.exports = {
    createFlight,
    getAllFlights
}