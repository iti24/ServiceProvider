const mongoose = require("mongoose");

const servicePriceOptionSchema = new mongoose.Schema({
  duration: Number,
  price: Number,
  optionType: String, //"hourly","weekly","Monthly"
});

module.exports = mongoose.model("ServicePriceOption", servicePriceOptionSchema);
