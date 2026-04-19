import Category from "../models/Category.js";

export const addCategory = async (req, res) => {
  try {
    const category = await Category.create({
      name: req.body.name
    });
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};