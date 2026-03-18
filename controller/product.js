import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
  const product = await Product.create({
    name: req.body.name,
    description: req.body.description,
    // price: req.body.price,
    category: req.body.category,
 image: req.file ? req.file.filename : null
  });
  res.json(product);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const updateProduct = async (req, res) => {
  const data = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
  };

  if (req.file) {
data.image = req.file.filename;
  }

  const product = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};