const express = require("express");
const router = express.Router();
const {
  addService,
  findService,
  deleteService,
  updateService,
} = require("../controllers/service");

// Define routes for CRUD operations on category
router.post("/", addService);
router.get("/", findService);
router.patch("/:id", updateService);
router.delete("/:id", deleteService);

module.exports = router;
