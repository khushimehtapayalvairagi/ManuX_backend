import Notification from "../models/Notification.js";

// ✅ ADD (same as addNotification)
export const createNotification = async (req, res) => {
  try {
    console.log("📥 Notification API HIT:", req.body);

    const { name, category, description } = req.body;

    const newNotification = await Notification.create({
      name,
      category,
      description
    });

    res.status(201).json(newNotification);

  } catch (err) {
    console.log("❌ ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ GET ALL (for initial load)
export const getNotifications = async (req, res) => {
  try {
    const data = await Notification.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ MARK ALL READ (same as markAllRead)
export const markAllRead = async (req, res) => {
  try {
    await Notification.updateMany({}, { read: true });
    res.json({ message: "All marked as read" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};