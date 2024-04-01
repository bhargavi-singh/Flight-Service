const crudRepository = require("./crud-repository");
const {Sequelize} = require('sequelize')
const {Flight,Airplane,Airport} = require("../models")
class FlightRepository extends crudRepository{
    constructor(){
        super(Flight)
    }
    async get(data){
        console.log(res,"df")
            const res = await Flight.findByPk(data);
           
            if(!res)
        throw new AppError(`Cannot find the airplane with id ${data}`,StatusCodes.NOT_FOUND)
            return res;
       
    }
    async getAllFlights(filter,sort){
        console.log(filter)
        const response = await Flight.findAll({
            attributes: ['id', 'flightNumber', 'airplaneId', 'departureAirportId', 'arrivalAirportId', 'arrivalTime', 'departureTime', 'price', 'boardingGate', 'totalSeats', 'createdAt', 'updatedAt'],
            where: filter,
            order:sort,
            include:[
                {
                    model:Airplane, 
                    required:true,
                    as:'airplane_detail'
                },
                {
                    model:Airport,
                    required:true,
                    as:'airport_departure',
                    on:Sequelize.where(Sequelize.col("Flight.departureAirportId"),"=",Sequelize.col("airport_departure.code"))
                },
                {
                    model:Airport,
                    required:true,
                    as:'airport_arrival',
                    on:Sequelize.where(Sequelize.col("Flight.arrivalAirportId"),"=",Sequelize.col("airport_arrival.code"))
                }
            ]
                // departureAirportId: filter.departureAirportId,
                // arrivalAirportId: filter.arrivalAirportId
            
        });
        console.log(response,"zxsf")
        return response;
    }
    async  updateRemainingSeats(flightId,seats,dec = true){
        console.log("flightrrr",flightId)
        const flight = await Flight.findOne({ where: { id: flightId } });
        if(!flight)
        console.log("no flight")
        else
        console.log("flight")
        // if(dec){
        //     console.log("!")
        //     const response = await flight.decrement('totalSeats',{by:seats})
        //     console.log(response,"a ")
        //     return response;
        // }
        // else{
        //     console.log("!")
        //     const response = await flight.increment('totalSeats',{by:seats})
        //     return response
        // }
    }
}



module.exports = FlightRepository