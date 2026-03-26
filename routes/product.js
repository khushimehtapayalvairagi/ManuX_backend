import express from "express";
import { addProduct, getProducts, updateProduct, deleteProduct } from "../controller/product.js";
import { protect, adminOnly } from "../middleware/auth.js";
import { upload } from "../middleware/uploads.js";

const router = express.Router();

router.post("/", protect, adminOnly, upload.single("image"), addProduct);
router.put("/:id", protect,  updateProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);
router.get("/",getProducts);

export default router;