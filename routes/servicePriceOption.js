const express = require("express");
const router = express.Router();
const {
  addServiceOption,
  getServiceOption,
} = require("../controllers/servicePriceOption");

// Define routes for CRUD operations on category
router.post("/", addServiceOption);
router.get("/", getServiceOption);

module.exports = router;
