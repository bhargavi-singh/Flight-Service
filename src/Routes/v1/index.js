const express = require('express');
const { infoController } = require('../../controllers');

const router = express.Router();

router.get("/info",infoController.info)

module.exports = router