const Service = require("../models/service");

const addMorepriceOption = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    service.priceOptions.push(...req.body);
    await service.save();
    console.log(service);
    res.status(201).json(service);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

module.exports = {
  addMorepriceOption,
};
