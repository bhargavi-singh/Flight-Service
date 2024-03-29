const express = require("express");

const {FlightController} = require("../../controllers");
const { flightMiddleware } = require("../../middleware");

const router = express.Router();

router.post('/',flightMiddleware.validateCreateRequest,FlightController.createFlight)
router.get('/',FlightController.getAllFlights)

module.exports = router