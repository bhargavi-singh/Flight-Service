const express = require('express');
const { infoController } = require('../../controllers');

const  airplaneRoutes=require("./airplane-route")
const cityRoutes = require("./city-route")
const airportRoutes = require('./airport-route')
const flightRoutes = require('./flight-route')
const router = express.Router();

router.get("/info",infoController.info)

router.use('/airplanes',airplaneRoutes)
router.use("/cities",cityRoutes)
router.use('/airports',airportRoutes)
router.use('/flights',flightRoutes)

module.exports = router