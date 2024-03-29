const express = require("express");

const {FlightController} = require("../../controllers");
const { flightMiddleware } = require("../../middleware");

const router = express.Router();

router.post('/',flightMiddleware.validateCreateRequest,FlightController.createFlight)

module.exports = router