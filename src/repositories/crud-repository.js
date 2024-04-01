const { StatusCodes } = require("http-status-codes");
const {Logger} = require("../config");
const AppError = require("../utils/errors/app-error");

class crudRepository{
    constructor(model){
        this.model  = model
    }

    async create(data){
       
            console.log(data,"model")
            const res = await this.model.create(data);
            return res;
        
    }
    async destroy(data){
       
            const res = await this.model.destroy({
                where:{
                    id:data
                }
            });
            if(!res){
                throw new AppError(`Cannot find the airplane with id ${data}`,StatusCodes.NOT_FOUND)
            }
            return res;
       
    }
    async get(data){
        console.log(res,"df")
            const res = await this.model.findByPk(data);
           
            if(!res)
        throw new AppError(`Cannot find the airplane with id ${data}`,StatusCodes.NOT_FOUND)
            return res;
       
    }
    async getAll(data){
       
            const res = await this.model.findAll(data);
            return res;
        
    }
    async update(data){
       
            const res = await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return res;
       
    }
}

module.exports= crudRepository
