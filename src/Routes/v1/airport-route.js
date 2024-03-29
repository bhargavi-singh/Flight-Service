const express = require("express");

const {airportController} = require("../../controllers");
const { AirportMiddleware } = require("../../middleware");

const router = express.Router();

router.post('/',AirportMiddleware.validateCreateRequest,airportController.createAirport)
router.get('/',airportController.getAirports)
router.get('/:id',airportController.getAirport)
router.delete('/:id',airportController.destroyAirport)
module.exports = router