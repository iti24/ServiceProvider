const Service = require("../models/servicePriceOption");
const addServiceOption = async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res
      .status(201)
      .json({ message: "the serviceprice Options are save successfully " });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const getServiceOption = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page number (default to 1)
    const perPage = parseInt(req.query.perPage) || 10;
    const skip = (page - 1) * perPage;
    const service = await Service.find().skip(skip).limit(perPage);

    res.status(201).json(service);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

module.exports = {
  addServiceOption,
  getServiceOption,
};
