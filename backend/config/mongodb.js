import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "e-commerce",
    });

    console.log("✅ DB Connected");
  } catch (error) {
    console.error("❌ MongoDB Error:", error);
  }
};

export default connectDB;