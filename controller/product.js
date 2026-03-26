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

// export const getProducts = async (req, res) => {
//   const products = await Product.find();

//   const fullProducts = products.map((p) => ({
//     ...p._doc,
//     image: p.image
//   ? `${req.protocol}://${req.get("host")}/uploads/${encodeURIComponent(p.image)}`
//   : `${req.protocol}://${req.get("host")}/uploads/default.png`,
//   }));

//   res.json(fullProducts);
// };

export const getProducts = async (req, res) => {
  const products = await Product.find();

  const fullProducts = products.map((p) => ({
    ...p._doc,
    image: p.image
      ? `${req.protocol}://${req.get("host")}/uploads/${encodeURIComponent(p.image)}`
      : null, // ❗ DO NOT SEND /uploads/null
  }));

  res.json(fullProducts);
};
export const updateProduct = async (req, res) => {
  try {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const updateData = {};

    // Only update if value exists
    if (req.body.name !== undefined) {
      updateData.name = req.body.name;
    }

    // if (req.body.price !== undefined) {
    //   updateData.price = req.body.price;
    // }

    // if (req.body.description !== undefined) {
    //   updateData.description = req.body.description;
    // }
   if (req.body.description !== undefined) {
  updateData.description = req.body.description;
}

    if (req.body.category !== undefined) {
      updateData.category = req.body.category;
    }

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(product);

  } catch (error) {
    console.log("UPDATE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};