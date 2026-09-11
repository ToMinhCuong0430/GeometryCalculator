import mongoose from "mongoose";

const calculationSchema = new mongoose.Schema(
    {
        shape: {
            type: String,
            required: true
        },

        inputs: {
            type: Object,
            required: true
        },

        result: {
            type: Object,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Calculation = mongoose.model(
    "Calculation",
    calculationSchema
);

export default Calculation;