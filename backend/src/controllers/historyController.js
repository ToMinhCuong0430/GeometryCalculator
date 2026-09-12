import Calculation from "../models/Calculation.js";

export async function createHistory(req, res) {
    try {
        const { shape, inputs, result } = req.body;

        const calculation = await Calculation.create({
            shape,
            inputs,
            result
        });

        res.status(201).json(calculation);
    } catch (error) {
        res.status(500).json({
            error: "Failed to save calculation history"
        });
    }
}

export async function getHistory(req, res) {
    try {
        const history = await Calculation.find().sort({ createdAt: -1 });
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({
            error: "Failed to get calculation history"
        });
    }
}

export async function deleteHistory(req, res) {
    try {
        await Calculation.deleteMany({});
        res.status(200).json({ message: "History cleared successfully" });
    } catch (error) {
        res.status(500).json({
            error: "Failed to clear calculation history"
        });
    }
}