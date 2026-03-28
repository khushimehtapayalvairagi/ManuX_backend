import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  read: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

export default mongoose.model("Notification", notificationSchema);