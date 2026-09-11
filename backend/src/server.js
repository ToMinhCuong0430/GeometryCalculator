import express from "express";
import cors from "cors";
import calculationRoutes from "./routes/calculationRoutes.js";
import {connectDatabase} from "./config/database.js";


const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDatabase();

// Routes
app.use("/api/calculations", calculationRoutes);
app.use("/api/history", historyRoutes);

// Test API
app.get("/", (req, res) => {
    res.json({
        message: "Geometry Calculator API is running",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});