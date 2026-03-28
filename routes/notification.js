import express from "express";
import {
  createNotification,
  getNotifications,
  markAllRead
} from "../controller/notification.js";

const router = express.Router();

router.post("/", createNotification);
router.get("/", getNotifications);
router.put("/read", markAllRead);

export default router;