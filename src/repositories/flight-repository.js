const crudRepository = require("./crud-repository");
const {Sequelize} = require('sequelize')
const {Flight,Airplane,Airport} = require("../models")
class FlightRepository extends crudRepository{
    constructor(){
        super(Flight)
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
}

module.exports = FlightRepository