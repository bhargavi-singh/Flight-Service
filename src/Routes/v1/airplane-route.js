const express = require("express");

const {AirplaneController} = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middleware");

const router = express.Router();

router.post('/',AirplaneMiddlewares.validateCreateRequest,AirplaneController.createAirplane)
router.get('/',AirplaneController.getAirplanes)

module.exports = router