import React, { useState } from 'react';

import CircleForm from '../shapes/circle/CircleForm';
import CirclePreview from '../shapes/circle/CirclePreview';

import { calculateCircleApi } from '../services/geometryApi';
import { validatePositiveNumber } from '../validators/geometryValidator';
import { executeCalculation } from '../utils/calculateUtils';

function CircleCalculator({ setLoading, setError, addToHistory }) {
    const [radius, setRadius] = useState(1);
    const [resultCircle, setResultCircle] = useState(null);

    const handleCalculateCircle = async () => {
        const r = Number(radius);

        await executeCalculation({
            validate: () => validatePositiveNumber(radius, "Radius"),
            calculate: () => calculateCircleApi(r),
            onSuccess: setResultCircle,
            addToHistory,
            shape: 'Circle',
            inputs: { radius: r },
            setLoading,
            setError,
            clearResult: () => setResultCircle(null)
        });
    }

    return (
        <>
            <h1>Circle Calculator</h1>
            <CircleForm
                radius={radius}
                setRadius={setRadius}
            />

            <button onClick={handleCalculateCircle}>Calculate Circle</button>

            <p>Diameter: {resultCircle?.diameter}</p>
            <p>Circumference: {resultCircle?.circumference}</p>
            <p>Area: {resultCircle?.area}</p>

            <CirclePreview radius={radius} />

        </>
    );
}

export default CircleCalculator;