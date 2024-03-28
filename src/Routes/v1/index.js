const express = require('express');
const { infoController } = require('../../controllers');
const  airplaneRoutes=require("./airplane-route")
const router = express.Router();

router.get("/info",infoController.info)

router.use('/airplanes',airplaneRoutes)

module.exports = router