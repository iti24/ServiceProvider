const mongoose = require("mongoose");
const PriceOption = require("./servicePriceOption");

const serviceSchema = new mongoose.Schema({
  categoryId: mongoose.Schema.Types.ObjectId,
  serviceName: String,
  type: String, // "Normal" or "VIP",
  priceOptions: [PriceOption.schema], // Use the subdocument schema here
});

module.exports = mongoose.model("Service", serviceSchema);
