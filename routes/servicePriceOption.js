const express = require("express");
const router = express.Router();
const { addMorepriceOption } = require("../controllers/servicePriceOption");

// Define routes for CRUD operations on servicepriceOption
router.patch("/:id", addMorepriceOption);

module.exports = router;
