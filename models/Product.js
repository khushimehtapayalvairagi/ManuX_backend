// src/models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  image: String
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
