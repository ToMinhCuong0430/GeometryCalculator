import mongoose from "mongoose";

export async function connectDatabase() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/geometry_calculator");

        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}