import express from "express";
import { addCategory,
  getCategories,
  deleteCategory,
   updateCategory   // 👈 ADD THIS
 } from "../controller/category.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// router.post("/", protect, adminOnly, addCategory);
// router.get("/", getCategories);
router.post("/", protect, adminOnly, addCategory);      // ADD
router.get("/", getCategories);                         // GET
router.put("/:id", protect, adminOnly, updateCategory); // UPDATE ✅
router.delete("/:id", protect, adminOnly, deleteCategory); // DELETE ✅

export default router;