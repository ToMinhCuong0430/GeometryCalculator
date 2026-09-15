import React, { useState } from 'react';

import SquareForm from '../shapes/square/SquareForm';
import SquarePreview from '../shapes/square/SquarePreview';

import { calculateSquareApi } from '../services/geometryApi';
import { validatePositiveNumber } from '../validators/geometryValidator';
import { executeCalculation } from '../utils/calculateUtils';
function SquareCalculator({ setLoading, setError, addToHistory }) {
    const [side, setSide] = useState(1);
    const [resultSquare, setResultSquare] = useState(null);

    const handleCalculateSquare = async () => {
        const s = Number(side);

        await executeCalculation({
            validate: () => validatePositiveNumber(side, "Side"),
            calculate: () => calculateSquareApi(s),
            onSuccess: setResultSquare,
            addToHistory,
            shape: 'Square',
            inputs: { side: s },
            setLoading,
            setError,
            clearResult: () => setResultSquare(null)
        });
    }

    return (
        <>
            <h1>Square Calculator</h1>
            <SquareForm
                side={side}
                setSide={setSide}
            />

            <button onClick={handleCalculateSquare}>Calculate Square</button>

            <p>Perimeter: {resultSquare?.perimeter}</p>
            <p>Area: {resultSquare?.area}</p>
            <SquarePreview side={side} />
        </>
    );
}

export default SquareCalculator;