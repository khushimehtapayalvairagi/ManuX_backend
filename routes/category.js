import express from "express";
import { addCategory, getCategories } from "../controller/category.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, adminOnly, addCategory);
router.get("/", getCategories);

export default router;