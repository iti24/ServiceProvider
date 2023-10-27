const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  categoryId: mongoose.Schema.Types.ObjectId,
  serviceName: String,
  type: String, //"Normal" or "VIP",
  priceOptions: [
    { type: mongoose.Schema.Types.ObjectId, ref: "ServicePriceOption" },
  ],
});

module.exports = mongoose.model("Service", serviceSchema);
