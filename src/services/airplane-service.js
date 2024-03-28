const { StatusCodes } = require("http-status-codes");
const {AirplaneRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airplanerepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        console.log(data,"service")
        const airplane = await airplanerepository.create(data);
        console.log(airplane,"xcv")
        return airplane
    }
    catch(err){
        console.log(err)
        if(err.name == 'SequelizeValidationError'){
            let explanation=[];
            err.errors.forEach((err)=>{
                explanation.push(err.message)
            })

            console.log(explanation)
            throw new AppError("Cannot create a new Airplane object",StatusCodes.INTERNAL_SERVER_ERROR)
        }
        throw err;
    }
}

async function getAirplanes(){
    try{
        const airplanes = await airplanerepository.getAll();
        return airplanes;

    }catch(error){
        throw new AppError("Cannnot fetch  data of all the airplanes",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function  getAirplane(id){
    try{
        const airplane = await airplanerepository.get(id);
        
        return airplane;

    }catch(error){
        if(error.statusCode ==   StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested is not present ",error.statusCode)
        }
        throw new AppError("Cannnot fetch  data of  the airplane",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function destroyAirplanes(id){
    try{
        const airplanes = await airplanerepository.destroy(id);
        return airplanes;

    }catch(error){
        if(error.statusCode ==   StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested is not present ",error.statusCode)
        }
        throw new AppError("Cannnot fetch  data of all the airplanes",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplanes
}