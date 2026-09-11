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

import { calculateCircleApi, calculateRectangleApi, calculateTriangleApi, calculateSquareApi } from './services/geometryApi';

import {validatePositiveNumber} from './validators/geometryValidator';


function App(){
  const [selectedShape, setSelectedShape] = useState('circle');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [radius, setRadius] = useState(6.4);
  const [resultCircle, setResultCircle] = useState(null);

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
    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) {
      setResultRectangle(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await calculateRectangleApi(l, w);
      setResultRectangle(result);
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
    if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) {
      setResultTriangle(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await calculateTriangleApi(b, h);
      setResultTriangle(result);
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
    </div>
  );
}

export default App;
