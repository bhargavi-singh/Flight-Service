const { StatusCodes } = require("http-status-codes")
const { CityService } = require("../services")
const { successResponse, errorResponse } = require("../utils/common")

async function createCity(req,res){
    try{
        console.log(req.body,"comtroller")
        const city = await CityService.createCity({
            name:req.body.name
        })
        successResponse.data = city
        return res.status(StatusCodes.CREATED).json(successResponse)
    }
    catch(err){
        errorResponse.error = err
        res.status(err.statusCode)
        .json(errorResponse)
    }
}
module.exports = {
    createCity
}