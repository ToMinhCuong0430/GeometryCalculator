import React, { useState } from 'react';

import TriangleForm from '../shapes/triangle/TriangleForm';
import TrianglePreview from '../shapes/triangle/TrianglePreview';

import { calculateTriangleApi } from '../services/geometryApi';
import { validatePositiveNumber } from '../validators/geometryValidator';
import { executeCalculation } from '../utils/calculateUtils';

function TriangleCalculator({ setLoading, setError, addToHistory }) {
    const [base, setBase] = useState(1);
    const [height, setHeight] = useState(1);
    const [resultTriangle, setResultTriangle] = useState(null);

    const handleCalculateTriangle = async () => {
        const b = Number(base);
        const h = Number(height);

        await executeCalculation({
            validate: () => {
                const errorBase = validatePositiveNumber(base, "Base");
                const errorHeight = validatePositiveNumber(height, "Height");
                if (errorBase || errorHeight) {
                    return [errorBase, errorHeight].filter(Boolean).join(" | ");
                }
                return null;
            },
            calculate: () => calculateTriangleApi(b, h),
            onSuccess: setResultTriangle,
            addToHistory,
            shape: 'Triangle',
            inputs: { base: b, height: h },
            setLoading,
            setError,
            clearResult: () => setResultTriangle(null)
        });
    }

    return (
        <>
            <h1>Triangle Calculator</h1>
            <TriangleForm
                base={base}
                setBase={setBase}
                height={height}
                setHeight={setHeight}
            />

            <button onClick={handleCalculateTriangle}>Calculate Triangle</button>

            <p>Perimeter: {resultTriangle?.perimeter}</p>
            <p>Area: {resultTriangle?.area}</p>

            <TrianglePreview base={base} height={height} />
        </>
    );
}

export default TriangleCalculator;