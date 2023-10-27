const Category = require("../models/category");
const addCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json({ message: "the category name save successfully " });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const findCategory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page number (default to 1)
    const perPage = parseInt(req.query.perPage) || 10;
    const skip = (page - 1) * perPage;
    const category = await Category.find().skip(skip).limit(perPage);

    res.status(201).json(category);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (deletedCategory.deletedCount === 0) {
      res.status(404).json({ message: "category details not found" });
    }
    res.status(201).json(deletedCategory);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};
const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, {
      categoryName: req.body.categoryName,
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

module.exports = {
  addCategory,
  findCategory,
  deleteCategory,
  updateCategory,
};
