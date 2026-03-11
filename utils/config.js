import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Database connected successfully");

    mongoose.connection.on("connected", async () => {
      console.log("✅ MongoDB Connected:", mongoose.connection.name);

      const collections = await mongoose.connection.db
        .listCollections()
        .toArray();

      console.log("📚 Collections in this DB:", collections.map(c => c.name));
    });

  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};
