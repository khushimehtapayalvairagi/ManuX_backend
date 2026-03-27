import express from "express";
import { createContact ,getContacts} from "../controller/contact.js";
import { protect, adminOnly } from "../middleware/auth.js";
const router = express.Router();

router.post("/", createContact);
router.get("/", protect, adminOnly, getContacts);


export default router;