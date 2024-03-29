const { StatusCodes } = require("http-status-codes");
const {AirportRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airportrepository = new AirportRepository();

async function createAirport(data){
    try{
        console.log(data,"service")
        const airport = await airportrepository.create(data);
        console.log(airport,"xcv")
        return airport
    }
    catch(err){
        console.log(err)
        if(err.name == 'SequelizeValidationError'){
            let explanation=[];
            err.errors.forEach((err)=>{
                explanation.push(err.message)
            })

            console.log(explanation)
            throw new AppError("Cannot create a new Airport object",StatusCodes.INTERNAL_SERVER_ERROR)
        }
        throw err;
    }
}

async function getAirports(){
    try{
        const airport = await airportrepository.getAll();
        return airport;

    }catch(error){
        throw new AppError("Cannnot fetch  data of all the airplanes",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function  getAirport(id){
    try{
        const airport = await airportrepository.get(id);
        
        return airport;

    }catch(error){
        if(error.statusCode ==   StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested is not present ",error.statusCode)
        }
        throw new AppError("Cannnot fetch  data of  the airplane",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function destroyAirport(id){
    try{
        const airport = await airportrepository.destroy(id);
        return airport;

    }catch(error){
        if(error.statusCode ==   StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested is not present ",error.statusCode)
        }
        throw new AppError("Cannnot fetch  data of all the airport",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}