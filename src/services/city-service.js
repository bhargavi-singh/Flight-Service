const { StatusCodes } = require("http-status-codes");
const {CityRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");

const cityrepository = new CityRepository();

async function createCity(data){
    try{
       
        const airplane = await cityrepository.create(data);
        
        return airplane
    }
    catch(err){
        
        if(err.name == 'SequelizeValidationError' || "SequelizeUniqueConstraintError"){
            let explanation=[];
            err.errors.forEach((err)=>{
                explanation.push(err.path + ' ' +err.message)
            })

            //console.log(explanation)
            throw new AppError(explanation,StatusCodes.INTERNAL_SERVER_ERROR)
        }
        throw new AppError("Cannot create a new city object",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports={
    createCity
}