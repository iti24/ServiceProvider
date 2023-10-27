const mongoose = require("mongoose");

const servicePriceOptionSchema = new mongoose.Schema({
  serviceId: mongoose.Schema.Types.ObjectId,
  duration: Number,
  price: Number,
  optionType: String, //"hourly","weekly","Monthly"
});

module.exports = mongoose.model("ServicePriceOption", servicePriceOptionSchema);
