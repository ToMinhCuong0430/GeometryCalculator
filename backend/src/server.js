import express from "express";
import cors from "cors";
import calculationRoutes from "./routes/calculationRoutes.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/calculations", calculationRoutes);

// Test API
app.get("/", (req, res) => {
    res.json({
        message: "Geometry Calculator API is running",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});