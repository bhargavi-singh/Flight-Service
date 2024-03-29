const { StatusCodes } = require("http-status-codes");
const {FlightRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");

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




module.exports = {
    createFlight,
    
}