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

// ✅ DELETE (🔥 IMPORTANT ADD THIS)
export const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};