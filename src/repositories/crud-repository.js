const {Logger} = require("../config")

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
            return res;
       
    }
    async get(data){
       
            const res = await this.model.findByPk(data);
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
