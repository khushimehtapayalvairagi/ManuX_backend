import express from "express";
import { createContact ,getContacts,deleteContact} from "../controller/contact.js";
import { protect, adminOnly } from "../middleware/auth.js";
const router = express.Router();

router.post("/", createContact);
router.get("/", protect, adminOnly, getContacts);
router.delete("/:id", protect, adminOnly, deleteContact);

export default router;