import React, { useState, useEffect } from 'react';

import CirclePreview from './shapes/circle/CirclePreview';
import CircleForm from './shapes/circle/CircleForm';

import RectangleForm from './shapes/rectangle/RectangleForm';
import RectanglePreview from './shapes/rectangle/RectanglePreview';

import TriangleForm from './shapes/triangle/TriangleForm';
import TrianglePreview from './shapes/triangle/TrianglePreview';

import SquareForm from './shapes/square/SquareForm';
import SquarePreview from './shapes/square/SquarePreview';

import ShapeSelector from './components/ShapeSelector';

import {  calculateCircleApi,
          calculateRectangleApi,
          calculateTriangleApi, 
          calculateSquareApi,
          saveHistory,
          getHistory,
          clearHistory
        } from './services/geometryApi';

import {validatePositiveNumber} from './validators/geometryValidator';


function App(){
  const [selectedShape, setSelectedShape] = useState('circle');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  const [radius, setRadius] = useState(6.4);
  const [resultCircle, setResultCircle] = useState(null);

  useEffect(() => {
    async function loadHistory() {
      try {
        const historyData = await getHistory();
        setHistory(historyData);
      } catch (error) {
        console.error("Failed to load history:", error);
      }
    }
    loadHistory();
  }, []);

  const handleCalculateCircle = async () => {
    const validationError = validatePositiveNumber(radius, "Radius");
    if (validationError) {
      setResultCircle(null);
      setError(validationError);
      return;
    }
    const r = Number(radius);

    setLoading(true);
    setError(null);

    try {
      const result = await calculateCircleApi(r);
      setResultCircle(result);

      const historyItem = { shape: 'Circle', inputs: { radius: r }, result: result };
      const savedHistory = await saveHistory(historyItem);

      setHistory(prevHistory =>[savedHistory, ...prevHistory]);

    } catch (error) {
      setError(error.message);
      setResultCircle(null);
    } finally {
      setLoading(false);
    }
  };

  const[length, setLength] = useState(5);
  const[width, setWidth] = useState(12);
  const [resultRectangle, setResultRectangle] = useState(null);

  const handleCalculateRectangle = async () => {
    const validationErrorLength = validatePositiveNumber(length, "Length");
    const validationErrorWidth = validatePositiveNumber(width, "Width");

    if(validationErrorLength || validationErrorWidth) {
      const errors = [];
      if (validationErrorLength) errors.push(validationErrorLength);
      if (validationErrorWidth) errors.push(validationErrorWidth);
      setError(errors.join(" | "));
      setResultRectangle(null);
      return;
    }

    const l = Number(length);
    const w = Number(width);

    setLoading(true);
    setError(null);

    try {
      const result = await calculateRectangleApi(l, w);
      setResultRectangle(result);

      const historyItem = { shape: 'Rectangle', inputs: { length: l, width: w }, result: result };
      const savedHistory = await saveHistory(historyItem);

      setHistory(prevHistory =>[savedHistory, ...prevHistory]);
    } catch (error) {
      setError(error.message);
      setResultRectangle(null);
    } finally {
      setLoading(false);
    }
  };

  const[base, setBase] = useState(9);
  const[height, setHeight] = useState(10);
  const [resultTriangle, setResultTriangle] = useState(null);

  const handleCalculateTriangle = async () => {
    const validationErrorBase = validatePositiveNumber(base, "Base");
    const validationErrorHeight = validatePositiveNumber(height, "Height");

    if (validationErrorBase || validationErrorHeight) {
      const errors = [];
      if (validationErrorBase) errors.push(validationErrorBase);
      if (validationErrorHeight) errors.push(validationErrorHeight);
      setError(errors.join(" | "));
      setResultTriangle(null);
      return;
    }

    const b = Number(base);
    const h = Number(height);

    setLoading(true);
    setError(null);

    try {
      const result = await calculateTriangleApi(b, h);
      setResultTriangle(result);

      const historyItem = { shape: 'Triangle', inputs: { base: b, height: h }, result: result };
      const savedHistory = await saveHistory(historyItem);

      setHistory(prevHistory =>[savedHistory, ...prevHistory]);
    } catch (error) {
      setError(error.message);
      setResultTriangle(null);
    } finally {
      setLoading(false);
    }
  };

  const[side, setSide] = useState(7);
  const [resultSquare, setResultSquare] = useState(null);
  const handleSquareCalculate = async () => {
    const validationErrorSide = validatePositiveNumber(side, "Side");
    if (validationErrorSide) {
      setError(validationErrorSide);
      setResultSquare(null);
      return;
    }
    const s = Number(side);

    setLoading(true);
    setError(null);
    try {
      const result = await calculateSquareApi(s);
      setResultSquare(result);

      const historyItem = { shape: 'Square', inputs: { side: s }, result: result };
      const savedHistory = await saveHistory(historyItem);
      setHistory(prevHistory =>[savedHistory, ...prevHistory]);
    } catch (error) {
      setError(error.message);
      setResultSquare(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCalculate = () => {
    if (selectedShape === 'circle') {
      handleCalculateCircle();
    }
    if (selectedShape === 'rectangle') {
      handleCalculateRectangle();
    }
    if (selectedShape === 'triangle') {
      handleCalculateTriangle();
    }
    if (selectedShape === 'square') {
      handleSquareCalculate();
    }
    };

  return (
    <div>
      <h1>Geometry Calculator</h1>
      <ShapeSelector selectedShape={selectedShape} setSelectedShape={setSelectedShape} />
      {loading && <p>Calculating...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {selectedShape === 'circle' && (
        <>
          <h1>Circle Calculator</h1>
          <CircleForm radius={radius} setRadius={setRadius} />
          <button onClick={handleCalculate}>Calculate</button>
          <p>Diameter: {resultCircle?.diameter}</p>
          <p>Circumference: {resultCircle?.circumference}</p>
          <p>Area: {resultCircle?.area}</p>
          <CirclePreview radius={radius} />
        </>
      )}

      {selectedShape === 'rectangle' && (
        <>
          <h1>Rectangle Calculator</h1>
          <RectangleForm length={length} width={width} setLength={setLength} setWidth={setWidth} />
          <button onClick={handleCalculate}>Calculate</button>
          <p>Perimeter: {resultRectangle?.perimeter}</p>
          <p>Area: {resultRectangle?.area}</p>
          <RectanglePreview length={length} width={width} />
        </>
      )}

      {selectedShape === 'triangle' && (
        <>
          <h1>Triangle Calculator</h1>
          <TriangleForm base={base} height={height} setBase={setBase} setHeight={setHeight} />
          <button onClick={handleCalculate}>Calculate</button>
          <p>Area: {resultTriangle?.area}</p>
          <TrianglePreview base={base} height={height} />
        </>
      )}

      {selectedShape === 'square' && (
        <>
          <h1>Square Calculator</h1>
          <SquareForm side={side} setSide={setSide} />
          <button onClick={handleCalculate}>Calculate</button>
          <p>Perimeter: {resultSquare?.perimeter}</p>
          <p>Area: {resultSquare?.area}</p>
          <SquarePreview side={side} />
        </>
      )}

      <h2>Calculation History</h2>
      {history.length === 0 ? (
        <p>No calculations yet.</p>
      ) : (
        <ul>
          {history.map((item) => (
            <li key={item._id}>
              <strong>{item.shape}</strong>
              <div>
                {Object.entries(item.inputs).map(([key, value]) => (
                  <p key={key}>{key}: {value}</p>
                ))}        
              </div>

              <div>
                {Object.entries(item.result).map(([key, value]) => (
                  <p key={key}>{key}: {value}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
      <button onClick={async () => {
        try {
          await clearHistory();
          setHistory([]);
        } catch (error) {
          console.error("Failed to clear history:", error);
        }
      }}>Clear History</button>
    </div>
  );
}

export default App;
