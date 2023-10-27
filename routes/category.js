const express = require("express");
const router = express.Router();
const {
  addCategory,
  findCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category");

// Define routes for CRUD operations on category
router.post("/", addCategory);
router.get("/", findCategory);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
