import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./utils/config.js";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    // origin: ["https://uudra.in", "http://localhost:3000"],
        origin: ["http://localhost:5000"],
          // origin: ["https://kloudcrm.site", "http://kloudcrm.site", "https://www.kloudcrm.site"],
      //      origin: [ "https://kashichem.com",  // ✅ Add this line
       origin:["http://manux.kashichem.com"],

        credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/uploads", express.static("uploads"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});