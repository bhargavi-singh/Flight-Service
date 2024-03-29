const crudRepository = require("./crud-repository");

const {Flight} = require("../models")
class FlightRepository extends crudRepository{
    constructor(){
        super(Flight)
    }
    async getAllFlights(filter,sort){
        console.log(filter)
        const response = await Flight.findAll({
            attributes: ['id', 'flightNumber', 'airplaneId', 'departureAirportId', 'arrivalAirportId', 'arrivalTime', 'departureTime', 'price', 'boardingGate', 'totalSeats', 'createdAt', 'updatedAt'],
            where: filter,
            order:sort
                // departureAirportId: filter.departureAirportId,
                // arrivalAirportId: filter.arrivalAirportId
            
        });
        console.log(response,"zxsf")
        return response;
    }
}

module.exports = FlightRepository