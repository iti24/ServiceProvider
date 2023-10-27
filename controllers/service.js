const Service = require("../models/service");
const addService = async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json({ message: "the service name save successfully " });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const findService = async (req, res) => {
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

const deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (deletedService.deletedCount === 0) {
      res.status(404).json({ message: "service details not found" });
    }
    res.status(201).json(deletedService);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};
const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, {
      serviceName: req.body.serviceName,
      type: req.body.type,
    });

    res.status(201).json(service);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

module.exports = {
  addService,
  findService,
  deleteService,
  updateService,
};
