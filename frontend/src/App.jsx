import React, { useState } from 'react';

import CirclePreview from './shapes/circle/CirclePreview';
import CircleForm from './shapes/circle/CircleForm';

import RectangleForm from './shapes/rectangle/RectangleForm';
import RectanglePreview from './shapes/rectangle/RectanglePreview';

import TriangleForm from './shapes/triangle/TriangleForm';
import TrianglePreview from './shapes/triangle/TrianglePreview';

import SquareForm from './shapes/square/SquareForm';
import SquarePreview from './shapes/square/SquarePreview';

import ShapeSelector from './components/ShapeSelector';
import HistoryLoader from './components/HistoryLoader';

import {  calculateCircleApi,
          calculateRectangleApi,
          calculateTriangleApi, 
          calculateSquareApi,
          saveHistory
        } from './services/geometryApi';

import {validatePositiveNumber} from './validators/geometryValidator';

import HistoryList from './components/HistoryList';
import ClearHistoryButton from './components/ClearHistoryButton';

import {executeCalculation} from './utils/calculateUtils';
function App(){
  const [selectedShape, setSelectedShape] = useState('circle');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  const [radius, setRadius] = useState(6.4);
  const [resultCircle, setResultCircle] = useState(null);

  const addToHistory = async (shape, inputs, result) => {
    const historyItem = { shape, inputs, result };

    const savedHistory = await saveHistory(historyItem);
    setHistory(prevHistory => [savedHistory, ...prevHistory]);
  }

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
  };

  const[length, setLength] = useState(5);
  const[width, setWidth] = useState(12);
  const [resultRectangle, setResultRectangle] = useState(null);

  const handleCalculateRectangle = async () => {
    const l = Number(length);
    const w = Number(width);

    await executeCalculation({
      validate: () => {
        const errorLength = validatePositiveNumber(length, "Length");
        const errorWidth = validatePositiveNumber(width, "Width");
        if (errorLength || errorWidth) {
          return [errorLength, errorWidth].filter(Boolean).join(" | ");
        }
        return null;
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
  };

  const[base, setBase] = useState(9);
  const[height, setHeight] = useState(10);
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
  };

  const[side, setSide] = useState(7);
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
  };

  const handleCalculate = () => {
    switch (selectedShape) {
      case 'circle':
        handleCalculateCircle();
        break;

      case 'rectangle':
        handleCalculateRectangle();
        break;

      case 'triangle':
        handleCalculateTriangle();
        break;

      case 'square':
        handleCalculateSquare();
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <h1>Geometry Calculator</h1>
      <ShapeSelector selectedShape={selectedShape} setSelectedShape={setSelectedShape} />
      <HistoryLoader setHistory={setHistory} />

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

      <HistoryList history={history} />
      <ClearHistoryButton setHistory={setHistory} />
    </div>
  );
}

export default App;
