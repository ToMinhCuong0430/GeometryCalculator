import React, { useState } from 'react';

import RectangleForm from '../shapes/rectangle/RectangleForm';
import RectanglePreview from '../shapes/rectangle/RectanglePreview';

import { calculateRectangleApi } from '../services/geometryApi';
import { validatePositiveNumber } from '../validators/geometryValidator';
import { executeCalculation } from '../utils/calculateUtils';

function RectangleCalculator({ setLoading, setError, addToHistory }) {
    const [length, setLength] = useState(1);
    const [width, setWidth] = useState(1);
    const [resultRectangle, setResultRectangle] = useState(null);

    const handleCalculateRectangle = async () => {
        const l = Number(length);
        const w = Number(width);

        await executeCalculation({
            validate: () => {
                validatePositiveNumber(length, "Length");
                validatePositiveNumber(width, "Width");
            },
            calculate: () => calculateRectangleApi(l, w),
            onSuccess: setResultRectangle,
            addToHistory,
            shape: 'Rectangle',
            inputs: { length: l, width: w },
            setLoading,
            setError,
            clearResult: () => setResultRectangle(null)
        });
    }
    
    return (
        <>
            <h1>Rectangle Calculator</h1>
            <RectangleForm
                length={length}
                setLength={setLength}
                width={width}
                setWidth={setWidth}
            />

            <button onClick={handleCalculateRectangle}>Calculate Rectangle</button>

            <p>Perimeter: {resultRectangle?.perimeter}</p>
            <p>Area: {resultRectangle?.area}</p>

            <RectanglePreview length={length} width={width} />

        </>
    );
}

export default RectangleCalculator;